# Generated by Django 3.1.2 on 2020-10-26 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0002_auto_20201026_2057'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='name',
            field=models.CharField(default='', max_length=200),
        ),
    ]
