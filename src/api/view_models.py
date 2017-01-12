import facebook
from django.db import IntegrityError
from django.http import Http404, HttpResponseBadRequest, HttpResponseServerError
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
                        fb=profile['id'],
                        img=picture['url'],
                        score=2
                    )
                    try:
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
        order = ''
        score_start = 0
        score_end = 4
        if input.get('heaven'):
            score_start = 2.5
            score_end = 4
            order = '-'
        elif input.get('purgatory'):
            score_start = 1.5
            score_end = 2.5
            order = '-'
        elif input.get('hell'):
            score_start = 0
            score_end = 1.5

        if many:
            if input.get('search'):
                self.data = models.Person.objects.filter(name__icontains=input.get('search'), score__gte=score_start, score__lte=score_end).exclude(id=0).order_by('{}score'.format(order))
            else:
                self.data = models.Person.objects.filter(score__gte=score_start, score__lte=score_end).exclude(id=0).order_by('{}score'.format(order))

    def get_data(self):
        return self.data


class Person(BaseViewModel):

    def __init__(self, input=None, session=None, cookies=None, many=False):
        super(Person, self).__init__(input=input, session=session, cookies=cookies)
        id = input.get('id', 0)
        if not id and 'id' in session:
            id = session['id']
        self.data = models.Person.objects.get(id=id)

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
        id = input.get('id', 0)
        self.data = models.Judgement.objects.filter(judged=id).exclude(judged=0).order_by('-created').prefetch_related('judge')

    def get_data(self):
        return self.data
