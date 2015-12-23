from django.db import models


class Quality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=30)
    active = models.NullBooleanField()


class Person(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=80)
    fb = models.CharField(max_length=80)
    img = models.URLField()
    qualities = models.ManyToManyField(
        'Quality',
        through='Judgement',
        through_fields=('judged', 'quality')
    )


class Judgement(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    judged = models.ForeignKey('Person')
    judge = models.ForeignKey('Person', related_name='judgements')
    quality = models.ForeignKey('Quality')
    score = models.PositiveSmallIntegerField()
    why = models.CharField(max_length=255)
