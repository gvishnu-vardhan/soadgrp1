from django.shortcuts import render
from rest_framework import generics, status, views, permissions
from .serializers import  RegisterSerializer,LoginSerializer,ResetPasswordEmailRequestSerializer,SetNewPasswordSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from django.conf import settings
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode

class RegisterView(views.APIView):

    serializer_class = RegisterSerializer
    
    def post(self,request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        #user_data = serializer.data
       
        return Response(serializer.data, status=status.HTTP_201_CREATED)





class LoginAPIView(views.APIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RequestPasswordResetEmail(views.APIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if not User.objects.filter(email=email).exists():
             return Response({'email': 'please give registered email'}, status=status.HTTP_400_BAD_REQUEST)


        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
           
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

         #redirect_url = request.data.get('redirect_url', '')
            absurl = 'http://localhost:3000' + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(views.APIView):

    def get(self,request,uidb64,token):
        try:
            id=smart_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user,token):
                return Response({'error':'Token is not valid , please request a new one'},status=status.HTTP_400_BAD_REQUEST)
            return Response({'success':True,'message':'Credentials Valid','uidb64':uidb64,'token':token},status=status.HTTP_200_OK)

            

        except DjangoUnicodeDecodeError as identifier:
            if not PasswordResetTokenGenerator().check_token(user,token):
                return Response({'error':'Token is not valid , please request a new one'},status=status.HTTP_400_BAD_REQUEST)



class SetNewPasswordAPIView(views.APIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)





class CurrentUserView(views.APIView):
   
    def get(self,request,slug):
       
            data=User.objects.get(name=slug)
            if request.method=='GET':
                serializer=RegisterSerializer(data)
                return Response(serializer.data)



