from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework import permissions

from api import models
from api import serializers


class Qualities(generics.ListAPIView):
    queryset = models.Quality.objects.all()
    serializer_class = serializers.Quality
