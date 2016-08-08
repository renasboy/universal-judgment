from django.test import TestCase, Client

from api import models


class APITest(TestCase):

    def _test_model(self, model, data):
        model(**data).save()
        result = model.objects.get(id=data.get('id'))
        result_data = { key: result.__dict__[key] for key in data.keys() }
        self.assertEqual(data, result_data)

    def test_quality_model(self):
        model = models.Quality
        test_data = dict(
            id=1,
            name='Quality 1',
            img='img/quality-1.png',
            active=True,
        )
        self._test_model(model, test_data)

    def test_person_model(self):
        model = models.Person
        test_data = dict(
            id=1,
            name='1',
            fb='renas',
            img='img/renas.png',
            score=4,
        )
        self._test_model(model, test_data)
        test_data = dict(
            id=0,
            name='Anonymous',
            fb='0',
            img='img/renas.png',
            score=0,
        )
        self._test_model(model, test_data)

    def test_judgement_model(self):
        model = models.Judgement
        test_data = dict(
            id=1,
            judged_id=1,
            judge_id=2,
            score=4,
            why='Reason why.',
        )
        self._test_model(model, test_data)

    def test_judgement_quality_model(self):
        model = models.JudgementQuality
        test_data = dict(
            id=1,
            judgement_id=1,
            quality_id=1,
            score=4,
        )
        self._test_model(model, test_data)

    def _test_get_call(self, url, data=None):
        client = Client()
        response = client.get(url, data)
        self.assertEqual(response.status_code, 200)
        return response.json()

    def _test_post_call(self, url, data=None):
        client = Client()
        response = client.post(url, data)
        self.assertEqual(response.status_code, 200)
        return response.json()

    def test_quality_api(self):
        self.test_quality_model()
        url = '/qualities'
        response = self._test_get_call(url)
        self.assertEqual(len(response), 1)
        self.assertTrue(response[0]['id'])
        self.assertTrue(response[0]['name'])
        self.assertTrue(response[0]['img'])
        
    def test_people_api(self):
        self.test_person_model()
        url = '/people'
        response = self._test_get_call(url)
        self.assertEqual(len(response), 1)
        self.assertTrue(response[0]['id'])
        self.assertTrue(response[0]['name'])
        self.assertTrue(response[0]['img'])
        self.assertTrue(response[0]['score'])

    def test_person_api(self):
        self.test_quality_model()
        self.test_person_model()
        self.test_judgement_model()
        self.test_judgement_quality_model()
        url = '/person/1'
        response = self._test_get_call(url)
        self.assertTrue(response['id'])
        self.assertTrue(response['name'])
        self.assertTrue(response['img'])
        self.assertTrue(response['score'])
        self.assertTrue(response['status'])
        self.assertTrue(response['qualities'])

    def test_judgement_api(self):
        self.test_quality_model()
        self.test_person_model()
        self.test_judgement_model()
        self.test_judgement_quality_model()
        import json
        url = '/judgement'
        data = dict(
            judged=1,
            qualities=[
                dict(
                    id=1,
                    score=5
                )
            ],
            why='Explanation why'
        )
        response = self._test_post_call(url, data)
        self.assertTrue(response['result'])
