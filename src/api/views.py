from copy import copy

from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework import permissions

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from api import models
from api import view_models
from api import serializers


class GetView(APIView):

    input_serializer = None
    output_serializer = None
    view_model = None
    many = False

    def get(self, request, *args, **kwargs):
        data = copy(request.data)
        data.update(request.GET)
        data.update(*args)
        data.update(kwargs)
        input_serializer = self.input_serializer(data=data)
        if not input_serializer.is_valid():
            return Response(input_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        view_model = self.view_model(input=input_serializer.data, many=self.many)
        output_serializer = self.output_serializer(view_model.get_data(), many=self.many)
        return Response(output_serializer.data)


class PostView(APIView):

    input_serializer = None
    output_serializer = None
    view_model = None

    def post(self, request, *args, **kwargs):
        input_serializer = self.input_serializer(data=request.data)
        if not input_serializer.is_valid():
            return Response(input_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        view_model = self.view_model(input=input_serializer.data)
        output_serializer = self.output_serializer(view_model.get_data())
        return Response(output_serializer.data)


class ListView(GetView):
    many = True


class Qualities(ListView):
    input_serializer = serializers.QualityInput
    output_serializer = serializers.QualityOutput
    view_model = view_models.Quality
    

class People(ListView):
    input_serializer = serializers.PeopleInput
    output_serializer = serializers.PeopleOutput
    view_model = view_models.People


class Person(GetView):
    input_serializer = serializers.PersonInput
    output_serializer = serializers.PersonOutput
    view_model = view_models.Person


class Judgement(PostView):
    input_serializer = serializers.JudgementInput
    output_serializer = serializers.JudgementOutput
    view_model = view_models.Judgement
