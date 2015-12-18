from django.db import models


class Person(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=80)
    fb = models.CharField(max_length=80)
    img = models.URLField()


class Quality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=30)
    active = models.NullBooleanField()


class Judgement(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    person = models.ForeignKey('Person')
    quality = models.ForeignKey('Quality')
    score = models.PositiveSmallIntegerField()
