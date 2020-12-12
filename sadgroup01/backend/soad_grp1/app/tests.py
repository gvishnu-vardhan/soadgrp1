import json
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse



class RegistrationTestCase(APITestCase):
    
    def test_packer_registration(self):
        data={'name':"akmu09",'phonenumber':"9704790687",'email_id':"ann@gmail.com",'from_address':"fs", 'from_city':"fsmk", 'from_state':"fsmk", 'from_zipcode':"fsmk",'Num_of_workers_required':3,'Num_of_trucks_required':4,'to_address':"fsmk", 'to_city':"fsmk", 'to_state':"fsmk", 'to_zipcode':"fsmk",'date_of_moving':"2020-11-10"}
        self.house_create_url = reverse('packer')
       
        response=self.client.post(self.house_create_url,data,format="json")
        self.assertEqual(response.status_code,status.HTTP_200_OK)

        

    
    def test_packer_user_data(self):
        self.test_packer_registration()
        name="akmu09"
        
        self.user_data_url = reverse(
                'mover', kwargs={'slug': name})
       
        res=self.client.get(self.user_data_url)
        
        self.assertEqual(res.status_code,200)
    


    

    