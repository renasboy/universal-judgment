from django.test import TestCase

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
            name='renas',
            fb='renas',
            img='img/renas.png',
            score=100,
        )
        self._test_model(model, test_data)
        test_data = dict(
            id=2,
            name='renas2',
            fb='renas2',
            img='img/renas.png',
            score=100,
        )
        self._test_model(model, test_data)

    def test_judgement_model(self):
        model = models.Judgement
        test_data = dict(
            id=1,
            judged_id=1,
            judge_id=2,
            score=100,
            why='Reason why.',
        )
        self._test_model(model, test_data)

    def test_judgement_quality_model(self):
        model = models.JudgementQuality
        test_data = dict(
            id=1,
            judgement_id=1,
            quality_id=1,
            score=100,
        )
        self._test_model(model, test_data)

    def test_success(self):
        pass
