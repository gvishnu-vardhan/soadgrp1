# Generated by Django 3.1.2 on 2020-10-20 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(db_index=True, max_length=255, unique=True),
        ),
    ]