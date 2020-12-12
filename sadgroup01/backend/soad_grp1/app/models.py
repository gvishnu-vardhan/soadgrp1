from django.db import models
from django.utils.timezone import now

# Create your models here.
class Packers(models.Model):
    name=models.CharField(max_length=200,default='')
    phonenumber=models.CharField(max_length=15,default='',unique=True)
    email_id=models.CharField(max_length=100,default='',unique=True)
    from_address = models.CharField(max_length=150,default='')
    from_city = models.CharField(max_length=100)
    from_state = models.CharField(max_length=100)
    from_zipcode = models.CharField(max_length=15)
    Num_of_workers_required=models.IntegerField(default='4')
    Num_of_trucks_required=models.IntegerField(default='2')
    to_address = models.CharField(max_length=150,default='')
    to_city = models.CharField(max_length=100,default='')
    to_state = models.CharField(max_length=100,default='')
    to_zipcode = models.CharField(max_length=15,default='')
    
    date_of_moving = models.DateField(default=now, blank=True)

    def __str__(self):
        return self.name

