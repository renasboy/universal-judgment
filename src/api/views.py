#from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework import permissions

from api import models
from api import serializers


class Index(TemplateView):
    template_name = 'index.html'


class QualityList(generics.ListCreateAPIView):
    queryset = models.Quality.objects.all()
    serializer_class = serializers.Quality
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly)

class QualityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Quality.objects.all()
    serializer_class = serializers.Quality
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly)
