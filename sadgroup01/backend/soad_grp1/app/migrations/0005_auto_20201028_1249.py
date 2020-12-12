# Generated by Django 3.1.2 on 2020-10-28 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20201028_1221'),
    ]

    operations = [
        migrations.RenameField(
            model_name='packers',
            old_name='city',
            new_name='from_city',
        ),
        migrations.RenameField(
            model_name='packers',
            old_name='housenumber',
            new_name='from_housenumber',
        ),
        migrations.RenameField(
            model_name='packers',
            old_name='state',
            new_name='from_state',
        ),
        migrations.RenameField(
            model_name='packers',
            old_name='zipcode',
            new_name='from_zipcode',
        ),
        migrations.RemoveField(
            model_name='packers',
            name='address',
        ),
        migrations.RemoveField(
            model_name='packers',
            name='is_published',
        ),
        migrations.RemoveField(
            model_name='packers',
            name='title',
        ),
        migrations.AddField(
            model_name='packers',
            name='Num_of_trucks_required',
            field=models.IntegerField(default='2'),
        ),
        migrations.AddField(
            model_name='packers',
            name='Num_of_workers_required',
            field=models.IntegerField(default='4'),
        ),
        migrations.AddField(
            model_name='packers',
            name='from_address',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='packers',
            name='to_address',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AddField(
            model_name='packers',
            name='to_city',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='packers',
            name='to_housenumber',
            field=models.CharField(default='', max_length=200, unique=True),
        ),
        migrations.AddField(
            model_name='packers',
            name='to_state',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='packers',
            name='to_zipcode',
            field=models.CharField(default='', max_length=15),
        ),
    ]