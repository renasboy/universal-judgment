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
    judge = models.ForeignKey('Person', related_name='opinions', default=0)
    score = models.FloatField()
    why = models.CharField(max_length=255, blank=True)
    qualities = models.ManyToManyField(
        'Quality',
        through='JudgementQuality',
        through_fields=('judgement', 'quality')
    )

    @property
    def judge_slug(self):
        return self.judge.slug

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
    slug = models.SlugField(max_length=80, unique=True)
    fb = models.CharField(max_length=80, unique=True)
    img = models.URLField()
    score = models.FloatField()

    def status(self):
        if self.score > 2.5:
            return 'heaven'
        if self.score < 1.5:
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
                score=round(score.get('score__avg'), 2)
            ))
        return qualities

    def __str__(self):
        return self.name
