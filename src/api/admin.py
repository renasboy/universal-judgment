from django.contrib import admin
from api import models

# This is for the ManyToMany through to show in the same form
class JudgementQualityInline(admin.TabularInline):
    model = models.JudgementQuality
    extra = 1

class JudgementAdmin(admin.ModelAdmin):
    inlines = (JudgementQualityInline,)

admin.site.register(models.Quality)
admin.site.register(models.Person)
admin.site.register(models.Judgement, JudgementAdmin)
