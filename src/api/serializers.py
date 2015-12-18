from rest_framework import serializers

from api import models

class Person(serializers.ModelSerializer):
    class Meta:
        model = models.Person
        fields = ('id', 'name', 'fb', 'img') 


class Quality(serializers.ModelSerializer):
    class Meta:
        model = models.Quality
        fields = ('id', 'name')
