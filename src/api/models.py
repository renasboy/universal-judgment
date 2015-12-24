from django.db import models


class Quality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=30)
    active = models.BooleanField(default=False)


class Person(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=80)
    fb = models.CharField(max_length=80)
    img = models.URLField()


class Judgement(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    judged = models.ForeignKey('Person')
    judge = models.ForeignKey('Person', related_name='judgements')
    why = models.CharField(max_length=255)


class JudgementQuality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    judgement = models.ForeignKey('Judgement')
    quality = models.ForeignKey('Quality')
    score = models.PositiveSmallIntegerField()
