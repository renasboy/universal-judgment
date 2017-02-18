from django.contrib import admin
from api import models

# This is for the ManyToMany through to show in the same form
class JudgementQualityInline(admin.TabularInline):
    model = models.JudgementQuality
    extra = 1


class JudgementAdmin(admin.ModelAdmin):
    inlines = (JudgementQualityInline,)
    search_fields = ('why',)


class PersonAdmin(admin.ModelAdmin):
    search_fields = ('name',)

    def get_ordering(self, request):
        return ('name',)

admin.site.register(models.Quality)
admin.site.register(models.Person, PersonAdmin)
admin.site.register(models.Judgement, JudgementAdmin)
