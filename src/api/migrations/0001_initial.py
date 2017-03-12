# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-03-12 10:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Judgement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('score', models.FloatField()),
                ('why', models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='JudgementQuality',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('score', models.PositiveSmallIntegerField()),
                ('judgement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Judgement')),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=80)),
                ('slug', models.SlugField(max_length=80, unique=True)),
                ('fb', models.CharField(max_length=80, unique=True)),
                ('img', models.URLField()),
                ('score', models.FloatField()),
                ('recommended_for', models.CharField(choices=[('nr', 'Not recommended'), ('it', 'Italy'), ('zh', 'China'), ('hi', 'India'), ('pt', 'Brazil'), ('ww', 'World Wide')], default='nr', max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Quality',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=30)),
                ('img', models.URLField()),
                ('active', models.BooleanField(default=False)),
            ],
        ),
        migrations.AddField(
            model_name='judgementquality',
            name='quality',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Quality'),
        ),
        migrations.AddField(
            model_name='judgement',
            name='judge',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='opinions', to='api.Person'),
        ),
        migrations.AddField(
            model_name='judgement',
            name='judged',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='judgements', to='api.Person'),
        ),
        migrations.AddField(
            model_name='judgement',
            name='qualities',
            field=models.ManyToManyField(through='api.JudgementQuality', to='api.Quality'),
        ),
    ]
