import facebook
from django.db import IntegrityError
from django.db.models import Count
from django.http import Http404, HttpResponseBadRequest, HttpResponseServerError
from django.utils.text import slugify
from api import models


class BaseViewModel(object):

    def __init__(self, input=None, session=None, cookies=None):
        access_token = cookies.get('fbat')
        if access_token and 'id' not in session:
            profile = None
            picture = None
            try:
                graph = facebook.GraphAPI(access_token)
                profile = graph.get_object('me')
                picture = graph.get_connections(id='me', connection_name='picture')
            except facebook.GraphAPIError:
                pass

            if profile and picture:
                session['fbid'] = profile['id']
                try:
                    person = models.Person.objects.get(fb=session['fbid'])
                except models.Person.DoesNotExist:
                    person = models.Person(
                        name=profile['name'],
                        slug=slugify(profile['name']),
                        fb=profile['id'],
                        img=picture['url'],
                        score=2
                    )
                    try:
                        person.save()
                        person.slug = slugify('{}-{}'.format(person.name, person.id))
                        person.save()
                    except IntegrityError:
                        pass
                if person:
                    session['id'] = person.id


class Quality(object):

    def __init__(self, input=None, session=None, cookies=None, many=False):
        if many:
            self.data = models.Quality.objects.all()

    def get_data(self):
        return self.data


class People(object):

    def __init__(self, input=None, session=None, cookies=None, many=False):
        order = 'score'
        score_start = 0
        score_end = 4
        limit = None
        if input.get('heaven'):
            score_start = 2.5
            score_end = 4
            order = '-score'
        elif input.get('purgatory'):
            score_start = 1.5
            score_end = 2.5
            order = '-score'
        elif input.get('hell'):
            score_start = 0
            score_end = 1.5
        elif input.get('latest'):
            order = '-modified'
            limit = 4
        elif input.get('top'):
            order = '-num_judgements'
            limit = 8

        filters = dict(
            score__gte=score_start,
            score__lte=score_end,
        )

        if many:
            if input.get('search'):
                filters.update(dict(name__icontains=input.get('search')))
            self.data = models.Person.objects.filter(**filters).exclude(id=0).annotate(num_judgements=Count('judgements')).order_by(order)[:limit]

    def get_data(self):
        return self.data


class Person(BaseViewModel):

    def __init__(self, input=None, session=None, cookies=None, many=False):
        super(Person, self).__init__(input=input, session=session, cookies=cookies)
        ####
        #people = models.Person.objects.all()
        #for p in people:
        #    p.slug = slugify('{}-{}'.format(p.name, p.id))
        #    p.updated_at = p.modified
        #    p.save()
        ####
        param = dict(id=0)
        if input.get('slug'):
            param = dict(slug=input.get('slug'))
        elif 'id' in session:
            param = dict(id=session['id'])

        try:
            self.data = models.Person.objects.get(**param)
        except models.Person.DoesNotExist:
            raise Http404()

    def get_data(self):
        if not self.data:
            raise Http404()
        return self.data


class Judgement(BaseViewModel):

    def __init__(self, input=None, session=None, cookies=None):
        super(Judgement, self).__init__(input=input, session=session, cookies=cookies)
        try:
            # TODO validate in the serialzier
            if input.get('judged'):
                judged = models.Person.objects.get(id=input.get('judged'))
            judge_id = session['id'] if 'id' in session else 0
            judge = models.Person.objects.get(id=judge_id)
            qualities = input.get('qualities')
        except:
            raise HttpResponseBadRequest()

        if judged and judge and qualities:
            try:
                # calculate score for this judgement
                score = sum([quality.get('score') for quality in qualities]) / len(qualities)
                # save judgement
                judgement = models.Judgement(
                    judged=judged,
                    judge=judge,
                    score=round(score, 2),
                    why=input.get('why')
                )
                judgement.save()
                
                # save judgement qualities
                for quality_item in qualities:
                    quality = models.Quality.objects.get(id=quality_item.get('id'))
                    judgement_quality = models.JudgementQuality(
                        judgement=judgement,
                        quality=quality,
                        score=quality_item.get('score')
                    )
                    judgement_quality.save()

                # update Person.score with new total score
                qualities = judged.qualities()
                total = sum([quality.get('score') for quality in qualities]) / len(qualities)
                judged.score = round(total, 2) 
                judged.save()
            except:
                raise HttpResponseServerError()

    def get_data(self):
        return dict(
            result=True
        )


class Judgements(object):

    def __init__(self, input=None, session=None, cookies=None, many=False):
        self.data = models.Judgement.objects.filter(judged__slug=input.get('slug')).exclude(judged=0).exclude(why='').order_by('-created').prefetch_related('judge')

    def get_data(self):
        return self.data
