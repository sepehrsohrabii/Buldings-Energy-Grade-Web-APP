# Generated by Django 3.1.7 on 2021-02-28 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lable',
            name='title',
            field=models.TextField(default='home', verbose_name='نام برچسب'),
        ),
    ]
