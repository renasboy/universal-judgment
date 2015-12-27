from django.test import TestCase

from api import models


class APITest(TestCase):

    def test_models(self):
        q1 = models.Quality()
        q1.name = 'Quality 1'
        q1.img = 'quality.png'
        q1.save()

    def test_success(self):
        pass
