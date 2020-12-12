from django.db import models
from django.utils.timezone import now

def upload_path(instance,filename):
    return '/'.join(['image',filename])
class Listing(models.Model):
    name=models.CharField(max_length=200,default='')
    #landlord = models.ForeignKey(Landlord,on_delete=models.DO_NOTHING,blank=True,null=True)
    housenumber=models.CharField(max_length=200,default='',unique=True)
    propertyfor= models.CharField(max_length=200,default='')
    # propertytype= models.CharField(max_length=200,default='')
    housetype= models.CharField(max_length=200,default='')
    accomdationtype=models.CharField(max_length=200,default='')
    pets= models.CharField(max_length=200,default='')
    title = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=15)
    description = models.TextField(blank=True)
    minprice = models.IntegerField(default = 0)
    maxprice = models.IntegerField(default = 0)
    numberoffloors = models.IntegerField(default = 0)
    propertyfloor = models.IntegerField(default = 0)
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    sqft = models.IntegerField()
    photo_1 = models.ImageField(upload_to = upload_path,blank = True)
    photo_2 = models.ImageField(upload_to = upload_path,blank = True)
    photo_3 = models.ImageField(upload_to = upload_path,blank = True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title

