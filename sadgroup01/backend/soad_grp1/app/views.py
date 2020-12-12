from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView,GenericAPIView
from rest_framework import generics,viewsets
from rest_framework import permissions
from .models import Packers
from .serializers import PackersSerializer, PackersDetailSerializer
from rest_framework import status

from django.shortcuts import render

def page_view(request):
    data=Packers.objects.all()
    context = {'data': data}
    return render(request,'page.html',context=context)
class CreateView(GenericAPIView):
    serializer_class = PackersSerializer
   
    def post(self,request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'success':'Successfully Posted'})

class OwnerView(GenericAPIView):
    serializer_class = PackersSerializer
  
    def get(self,request,slug):
        data=Packers.objects.get(name=slug)
        if request.method=='GET':
            serializer=PackersDetailSerializer(data)
            return Response(serializer.data)

    