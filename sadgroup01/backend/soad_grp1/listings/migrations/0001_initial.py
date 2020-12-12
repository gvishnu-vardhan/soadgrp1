# Generated by Django 3.1.2 on 2020-10-26 14:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propertyfor', models.CharField(default='', max_length=200)),
                ('housetype', models.CharField(default='', max_length=200)),
                ('accomdationtype', models.CharField(default='', max_length=200)),
                ('slug', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=150)),
                ('address', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('zipcode', models.CharField(max_length=15)),
                ('description', models.TextField(blank=True)),
                ('minprice', models.IntegerField()),
                ('maxprice', models.IntegerField()),
                ('numberoffloors', models.IntegerField(default=0)),
                ('propertyfloor', models.IntegerField(default=0)),
                ('bedrooms', models.IntegerField()),
                ('bathrooms', models.DecimalField(decimal_places=1, max_digits=2)),
                ('sqft', models.IntegerField()),
                ('photo_1', models.ImageField(blank=True, upload_to='image/')),
                ('photo_2', models.ImageField(blank=True, upload_to='image/')),
                ('photo_3', models.ImageField(blank=True, upload_to='image/')),
                ('is_published', models.BooleanField(default=True)),
                ('list_date', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
            ],
        ),
    ]
