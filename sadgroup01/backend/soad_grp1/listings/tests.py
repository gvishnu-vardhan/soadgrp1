import json
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from accounts.models import User

import tempfile
from PIL import Image

import io
class RegistrationTestCase(APITestCase):
    def test_registration(self):

        data={"email":"emailsdfnj@gmail.com","name":"vishnu001993","aadharnumber":"877467266338"
        ,"person":0,"password":"vishnu"}
        self.register_url = reverse('register')
       
        response=self.client.post(self.register_url,data,format="json")
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)

        return response

    def test_login(self):
        
        
        self.login_url = reverse('login')
        
        response=self.test_registration()
       
        email = response.data['email']
        user = User.objects.get(email=email)
        user_data={"email":"emailsdfnj@gmail.com","name":"vishnu001993","password":"vishnu"}
        
        user.save()
        res = self.client.post(self.login_url, user_data, format="json")
        self.assertEqual(res.status_code, 200)

        return res

    def generate_photo_file(self):
        file = io.BytesIO()
        image = Image.new('RGBA', size=(100, 100), color=(155, 0, 0))
        image.save(file, 'png')
        file.name = 'test.png'
        file.seek(0)
        return file
    
    def test_listing_registration(self):
        response=self.test_login()
        data={'name':response.data['name'],'propertyfor':"Rent",'housetype':"Villa",'accomdationtype':"Male",'title':"sdj",'housenumber':"1233", 'description':"dsnjsd",'address':"dsnjsd", 'city':"dsnjsd", 'state':"dsnjsd", 'zipcode':"dsnjsd",'numberoffloors':2,'propertyfloor':2,'bedrooms':2, 'bathrooms':1.0,'minprice':1000, 'sqft':1000,'pets':"Allowed",'photo_1':self.generate_photo_file(),'photo_2':self.generate_photo_file(),'photo_3':self.generate_photo_file()}
        self.house_create_url = reverse('post')
      
        response=self.client.post(self.house_create_url,data, format='multipart')
        
        self.assertEqual(response.status_code,status.HTTP_200_OK)

    def test_listing_get_user_data(self):
        self.test_listing_registration()
        name="vishnu001993"
        
        self.user_data_url = reverse(
                'Owner', kwargs={'slug': name})
        
        res=self.client.get(self.user_data_url)
      
        self.assertEqual(res.status_code,status.HTTP_200_OK)

    def test_listing_put_user_data(self):
        self.test_listing_registration()
        name="vishnu001993"
        data={'name':name,'propertyfor':"Rent",'housetype':"Apartment",'accomdationtype':"Female",'title':"sdj",'housenumber':"1233", 'description':"dsnjsd",'address':"dsnjsd", 'city':"dsnjsd", 'state':"dsnjsd", 'zipcode':"dsnjsd",'numberoffloors':2,'propertyfloor':2,'bedrooms':2, 'bathrooms':1.0,'minprice':1000, 'sqft':1000,'pets':"Allowed",'photo_1':self.generate_photo_file(),'photo_2':self.generate_photo_file(),'photo_3':self.generate_photo_file()}
        self.user_update_data_url = reverse(
                'update', kwargs={'slug': name})
        
        response=self.client.put(self.user_update_data_url,data,format="multipart")
       
        self.assertEqual(response.status_code,200)

    
    def test_listing_delete_user_data(self):
        self.test_listing_registration()
        name="vishnu001993"
        self.user_delete_data_url = reverse(
                'update', kwargs={'slug': name})
        response=self.client.delete(self.user_delete_data_url)
       
        self.assertEqual(response.status_code,200)



    def test_listing_search(self):
        self.test_listing_registration()
        data={'propertyfor':"Rent",'housetype':"Villa",'accomdationtype':"Male",'title':"sdj",'address':"dsnjsd", 'city':"dsnjsd", 'state':"dsnjsd", 'minprice':1000,'maxprice':10000,'bedrooms':2, 'bathrooms':1.0,'sqft':1000}
        self.listings_search_url=reverse('search')
        response=self.client.post(self.listings_search_url,data)
        
        self.assertEqual(response.status_code,200)
    






    

    

