from rest_framework import serializers

from api import models


class QualityInput(serializers.Serializer):
    pass


class QualityOutput(serializers.ModelSerializer):
    class Meta:
        model = models.Quality
        fields = ('id', 'name', 'img')


class PeopleInput(serializers.Serializer):
    search = serializers.CharField(max_length=40, required=False)
    heaven = serializers.BooleanField(required=False, default=False)
    hell = serializers.BooleanField(required=False, default=False)
    purgatory = serializers.BooleanField(required=False, default=False)
    latest = serializers.BooleanField(required=False, default=False)
    top = serializers.BooleanField(required=False, default=False)
    recommended = serializers.CharField(min_length=2, max_length=2, required=False)


class PeopleOutput(serializers.ModelSerializer):
    class Meta:
        model = models.Person
        fields = ('id', 'name', 'slug', 'img', 'score', 'status')


class PersonInput(serializers.ModelSerializer):
    slug = serializers.CharField(required=False, default=None)
    class Meta:
        model = models.Person
        fields = ('slug',)

    #def get_validation_exclusions(self):
    #    return ['slug']


class PersonQuality(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    img = serializers.CharField()
    score = serializers.FloatField()


class PersonOutput(serializers.ModelSerializer):
    qualities = PersonQuality(many=True)

    class Meta:
        model = models.Person
        fields = ('id', 'name', 'slug', 'img', 'score', 'status', 'qualities')


class JudgementQualityInput(serializers.ModelSerializer):
    # TODO why id is necessary here?
    id = serializers.IntegerField()
    score = serializers.IntegerField(min_value=0, max_value=5)

    class Meta:
        model = models.Quality
        fields = ('id', 'score')


class JudgementInput(serializers.ModelSerializer):
    qualities = JudgementQualityInput(many=True)

    # TODO validate judged not to be 0
    
    class Meta:
        model = models.Judgement
        fields = ('judged', 'why', 'qualities')


class JudgementOutput(serializers.Serializer):
    result = serializers.CharField()


class JudgementsInput(serializers.ModelSerializer):
    slug = serializers.CharField()
    class Meta:
        model = models.Person
        fields = ('slug',)

    #def get_validation_exclusions(self):
    #    return ['slug']


class JudgementsOutput(serializers.ModelSerializer):
    judge = serializers.StringRelatedField()

    class Meta:
        model = models.Judgement
        fields = ('id', 'created', 'judge', 'judge_slug', 'judge_img', 'judge_status', 'score', 'why')


class LogoutOutput(serializers.Serializer):
    result = serializers.CharField()
