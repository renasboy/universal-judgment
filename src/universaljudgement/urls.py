from django.conf.urls import url, include
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static

from api import views

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^admin/?', admin.site.urls),
    url(r'^qualities/?$', views.Qualities.as_view()),
    url(r'^judgment/?$', views.Judgement.as_view()),
    url(r'^judgments/(?P<id>[0-9]+)/?$', views.Judgements.as_view()),
    url(r'^people/?$', views.People.as_view()),
    url(r'^person/(?P<id>[0-9]+)/?$', views.Person.as_view()),
    url(r'^person', views.Person.as_view()),
    url(r'^logout', views.Logout.as_view()),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)
