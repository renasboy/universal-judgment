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

    many = False

    def get(self, request):
        input_serializer = self.input_serializer(data=request.data)
        if not input_serializer.is_valid():
            return Response(input_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        view_model = self.view_model(input=input_serializer.data, many=self.many)
        output_serializer = self.output_serializer(view_model.get_data(), many=self.many)
        return Response(output_serializer.data)


class ListView(GetView):
    many = True


class Qualities(ListView):
    input_serializer = serializers.QualityInput
    output_serializer = serializers.QualityOutput
    view_model = view_models.Quality
    

class People(ListView):
    input_serializer = serializers.PersonInput
    output_serializer = serializers.PersonOutput
    view_model = view_models.Person
