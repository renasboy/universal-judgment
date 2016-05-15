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


class PeopleOutput(serializers.ModelSerializer):
    class Meta:
        model = models.Person
        fields = ('id', 'name', 'img', 'score', 'status')


class PersonInput(serializers.ModelSerializer):
    class Meta:
        model = models.Person
        fields = ('fb',)


class PersonQuality(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    img = serializers.CharField()
    score = serializers.FloatField()


class PersonOutput(serializers.ModelSerializer):

    #qualities = PersonQuality(many=True)

    class Meta:
        model = models.Person
        #fields = ('id', 'name', 'img', 'score', 'status', 'qualities')
        fields = ('id', 'name', 'img', 'score', 'status')


class JudgementInput(serializers.Serializer):
    pass


class JudgementOutput(serializers.Serializer):
    pass
