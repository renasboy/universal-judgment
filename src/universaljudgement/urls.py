from django.conf.urls import url, include
from django.contrib import admin

from api import views

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^admin/?', admin.site.urls),
    url(r'^qualities/?$', views.Qualities.as_view()),
    url(r'^judgement/?$', views.Judgement.as_view()),
    url(r'^people/?$', views.People.as_view()),
    url(r'^person/(?P<id>[0-9]+)/?$', views.Person.as_view()),
    url(r'^person', views.Person.as_view()),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns = format_suffix_patterns(urlpatterns)
