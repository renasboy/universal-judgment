from django.db import models


class Quality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=30)
    img = models.URLField()
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.name


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

    def __str__(self):
        return '{} - {} judged {}'.format(
            self.id,
            self.judge.name,
            self.judged.name)


class JudgementQuality(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    judgement = models.ForeignKey('Judgement')
    quality = models.ForeignKey('Quality')
    score = models.PositiveSmallIntegerField()


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
        qualities = []
        scores = JudgementQuality.objects.filter(judgement__judged__id=self.id).values('quality').annotate(models.Avg('score'))
        for score in scores:
            quality = Quality.objects.get(id=score.get('quality'))
            qualities.append(dict(
                id=quality.id,
                name=quality.name,
                img=quality.img,
                score=score.get('score__avg')
            ))
        return qualities

    def __str__(self):
        return self.name
