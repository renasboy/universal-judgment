from django.db import models


class Quality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=30)
    img = models.URLField()
    active = models.BooleanField(default=False)


class Person(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=80)
    fb = models.CharField(max_length=80)
    img = models.URLField()
    score = models.FloatField()

    def status(self):
        if self.score > 75:
            return 'heaven'
        if self.score < 24:
            return 'hell'
        return 'purgatory'

    def qualities(self):
        return []


class Judgement(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    judged = models.ForeignKey('Person', related_name='judgements')
    judge = models.ForeignKey('Person', related_name='opinions')
    score = models.FloatField()
    why = models.CharField(max_length=255)
    qualities = models.ManyToManyField(
        'Quality',
        through='JudgementQuality',
        through_fields=('judgement', 'quality')
    )


class JudgementQuality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    judgement = models.ForeignKey('Judgement')
    quality = models.ForeignKey('Quality')
    score = models.PositiveSmallIntegerField()
