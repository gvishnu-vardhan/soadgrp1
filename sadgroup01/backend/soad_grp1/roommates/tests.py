import json
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse

from accounts.models import User

class RegistrationTestCase(APITestCase):
    abc=''
    def test_registration(self):

        data={"email":"emailsd@gmail.com","name":"vishnu001993","aadharnumber":"877467266338"
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
        user_data={"email":"emailsd@gmail.com","name":"vishnu001993","password":"vishnu"}
        
        user.save()
        res = self.client.post(self.login_url, user_data, format="json")
        self.assertEqual(res.status_code, 200)

        return res
    
    def test_roommates_registration(self):
        self.test_login()
        user_create=User.objects.create(name="vishnu00193")
        self.abc=user_create.id
        data=  { "user":user_create.id,
        "name": "vishnu001993",
        "gender": "male",
        "hometown": "kmofa",
        "roomtown": "kmofa",
        "language": "wdjkw",
        "occupation": "dklwlkm",
        "course": "dlkwle",
        "alcohol": "yes",
        "smoking": "yes",
        "culinary": "cannot",
        "food_preference": "flexible"
}
        self.roommate_create_url = reverse('create')
       
        response=self.client.post(self.roommate_create_url,data,format="json")
       
        self.assertEqual(response.status_code,201)


    def test_roommates_update(self):
        self.test_roommates_registration()

        self.roommate_update_url=reverse('update',kwargs={"name":"vishnu001993"})
        
        data=  { "user":self.abc,
        "name": "vishnu001993",
        "gender": "male",
        "hometown": "kmofa",
        "roomtown": "ksnfa",
        "language": "wdjkw",
        "occupation": "dklwlkm",
        "course": "dlkwle",
        "alcohol": "yes",
        "smoking": "yes",
        "culinary": "cannot",
        "food_preference": "flexible"
}
        response=self.client.put(self.roommate_update_url,data,format="json")
        
       
        self.assertEqual(response.status_code,200)


    def test_roommates_delete(self):
        self.test_roommates_registration()

        self.roommate_delete_url=reverse('delete',kwargs={"name":"vishnu001993"})
        
        
        response=self.client.delete(self.roommate_delete_url)
    
        self.assertEqual(response.status_code,204)


    def test_roommates_search(self):
        self.test_roommates_registration()
        data=  { 
        "name": "vishnu001993",
        "gender": "male",
        "hometown": "kmofa",
        "roomtown": "ksnfa",
        "language": "wdjkw",
        "occupation": "dklwlkm",
        "course": "dlkwle",
        "alcohol": "yes",
        "smoking": "yes",
        "culinary": "cannot",
        "food_preference": "flexible"
}
        self.listings_search_url=reverse('search')
        response=self.client.post(self.listings_search_url,data)
        
        self.assertEqual(response.status_code,200)
    


    

    