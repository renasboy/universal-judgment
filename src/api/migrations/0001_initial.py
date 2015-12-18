# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-18 14:08
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
                ('score', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=80)),
                ('fb', models.CharField(max_length=80)),
                ('img', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Quality',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=30)),
                ('active', models.NullBooleanField()),
            ],
        ),
        migrations.AddField(
            model_name='judgement',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Person'),
        ),
        migrations.AddField(
            model_name='judgement',
            name='quality',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Quality'),
        ),
    ]
