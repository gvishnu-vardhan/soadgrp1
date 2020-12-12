from django.db import models


# Create your models here.
class Interiors(models.Model):
    name=models.CharField(max_length=200,default='')
    phonenumber=models.CharField(max_length=15,default='',unique=True)
    email_id=models.CharField(max_length=100,default='',unique=True)
    house=models.CharField(max_length=15,default='',unique=True)
    timeline=models.CharField(max_length=15,default='',unique=True)
    work=models.CharField(max_length=15,default='',unique=True)
    budget=models.CharField(max_length=15,default='',unique=True)
    comments=models.TextField(blank=True)

    def __str__(self):
        return self.name

