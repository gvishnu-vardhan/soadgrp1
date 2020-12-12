import json
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from accounts.models import User

from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .serializers import  RegisterSerializer,LoginSerializer,ResetPasswordEmailRequestSerializer,SetNewPasswordSerializer


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

    
    def test_request_email(self):

        response=self.test_login()
        
        user_data={"email":"emailsdfnj@gmail.com"}
        self.request_email_url=reverse('request-reset-email')

        
        res=self.client.post(self.request_email_url,user_data)
       
        self.assertEqual(res.status_code,200)

    def test_password_reset(self):
        response=self.test_login()
        user=User.objects.get(email=response.data['email'])
        uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
        token = PasswordResetTokenGenerator().make_token(user)
           
        self.relativeLink_url = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})
        res=self.client.get(self.relativeLink_url)
       
        self.assertEqual(res.status_code,200)
        return res

    def test_password_complete(self):
        response=self.test_password_reset()
        self.password_complete_url=reverse('password-reset-complete')
        data={"password":"soadgroup01","confirmpassword":"soadgroup01","token":response.data["token"],"uidb64":response.data["uidb64"]}
        res=self.client.patch(self.password_complete_url,data,format="json")
       
        self.assertEqual(res.status_code,200)


    def test_user_data(self):
        response=self.test_login()
        name=response.data['name']
        
        self.user_data_url = reverse(
                'user', kwargs={'slug': name})
       
        res=self.client.get(self.user_data_url)
        
        self.assertEqual(res.status_code,200)


        







    



    
    

    



    


    

    