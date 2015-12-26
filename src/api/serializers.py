from rest_framework import serializers

from api import models


class PersonInput(serializers.Serializer):
    search = serializers.CharField(max_length=40, required=False)


class PersonOutput(serializers.ModelSerializer):
    class Meta:
        model = models.Person
        fields = ('id', 'name', 'img', 'score') 


class QualityInput(serializers.Serializer):
    pass


class QualityOutput(serializers.ModelSerializer):
    class Meta:
        model = models.Quality
        fields = ('id', 'name')
