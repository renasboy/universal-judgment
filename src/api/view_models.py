from django.http import Http404, HttpResponseBadRequest, HttpResponseServerError

from api import models

class Quality(object):

    def __init__(self, input=None, many=False):
        if many:
            self.data = models.Quality.objects.all()

    def get_data(self):
        return self.data


class People(object):

    def __init__(self, input=None, many=False):
        if many:
            if input.get('search'):
                self.data = models.Person.objects.filter(name__icontains=input.get('search'))
            else:
                self.data = models.Person.objects.all()

    def get_data(self):
        return self.data


class Person(object):

    def __init__(self, input=None, many=False):
        self.data = models.Person.objects.filter(fb__iexact=input.get('fb'))

    def get_data(self):
        if not self.data:
            raise Http404()
        return self.data[0]


class Judgement(object):

    def __init__(self, input=None):
        # TODO check if logged in and get judge data from session
        try:
            judged = models.Person.objects.get(id=input.get('judged'))
            # TODO get judge from session
            judge = models.Person.objects.get(id=input.get('judge'))
            qualities = input.get('qualities')
            print(qualities)
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
                    score=score,
                    why=input.get('why')
                )
                judgement.save()
                
                # save judgement qualities
                for quality_item in qualities:
                    print(quality_item.get('id'))
                    quality = models.Quality.objects.get(id=quality_item.get('id'))
                    judgement_quality = models.JudgementQuality(
                        judgement=judgement,
                        quality=quality,
                        score=quality_item.get('score')
                    )
                    judgement_quality.save()

                # update Person.score with new total score
                qualities = judged.qualities()
                judged.score = sum([quality.get('score') for quality in qualities]) / len(qualities)
                judged.save()
            except:
                raise HttpResponseServerError()

    def get_data(self):
        return dict(
            return=True
        )
