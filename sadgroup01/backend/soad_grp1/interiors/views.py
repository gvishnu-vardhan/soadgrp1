from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView,GenericAPIView
from rest_framework import generics,viewsets
from rest_framework import permissions
from .models import Interiors
from .serializers import InteriorsSerializer
from rest_framework import status

from django.shortcuts import render


class CreateView(GenericAPIView):
    serializer_class = InteriorsSerializer
   
    def post(self,request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'success':'Successfully Posted'})

class OwnerView(GenericAPIView):
    serializer_class = InteriorsSerializer
  
    def get(self,request,slug):
        data=Interiors.objects.get(name=slug)
        if request.method=='GET':
            serializer=InteriorsSerializer(data)
            return Response(serializer.data)

    