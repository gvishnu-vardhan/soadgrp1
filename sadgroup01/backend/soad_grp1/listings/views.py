from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView,GenericAPIView
from rest_framework import generics,viewsets
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, listingDetailSerializer
from rest_framework import status
from accounts.models import User

class ListingDataView(APIView):
    def get(self,request):
        data = Listing.objects.all()
        if request.method=='GET':
            serializer=ListingSerializer(data,many=True)
            
            return Response(serializer.data)




class CreateView(APIView):
    serializer_class =ListingSerializer
   
    def post(self,request):
        user = request.data
        serializer = self.serializer_class(data=user)
        
        serializer.is_valid(raise_exception=True)
      
        serializer.save()
        try:
            
            realtors=User.objects.get(name=serializer.data['name'])
           
            if realtors.person=='1':
                return Response({'error':'You cant register the form it is only for landlords'},status=status.HTTP_204_NO_CONTENT)
      
            
            return Response({'success':'House is Registered Successfully'}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
           
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class OwnerView(APIView):
    serializer_class =ListingSerializer
  
    def get(self,request,slug):
       
        data=Listing.objects.get(name=slug)
        if request.method=='GET':
            serializer=listingDetailSerializer(data)
            return Response(serializer.data)

    def delete(self,request,slug):
        house = Listing.objects.get(name = slug)
        house.delete()
        return Response({'success':'Successfully deleted'})

    
    def put(self,request,slug):
        house = Listing.objects.get(name= slug)
        serializer = listingDetailSerializer(house,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    



class SearchView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    queryset = Listing.objects.all()
    def post(self, request, format=None):
        queryset = Listing.objects.all()

        propertyfor_query = request.data.get('propertyfor')
        if propertyfor_query != ' ' and propertyfor_query is not None:
            queryset = queryset.filter(propertyfor__icontains = propertyfor_query)

        housetype_query = request.data.get('housetype')
        if housetype_query != ' ' and housetype_query is not None:
            queryset = queryset.filter(housetype__icontains = housetype_query)

        accomdationtype_query = request.data.get('accomdationtype')
        if accomdationtype_query != ' ' and accomdationtype_query is not None:
            queryset = queryset.filter(accomdationtype__icontains = accomdationtype_query)

        title_query = request.data.get('title')
        if title_query != ' ' and title_query is not None:
            queryset = queryset.filter(title__icontains = title_query)

        address_query = request.data.get('address')
        if address_query != ' ' and address_query is not None:
            queryset = queryset.filter(address__icontains = address_query)

        city_query = request.data.get('city')
        if city_query != ' ' and city_query is not None:
            queryset = queryset.filter(city__icontains = city_query)

        state_query = request.data.get('state')
        if state_query != ' ' and state_query is not None:
            queryset = queryset.filter(state__icontains = state_query)

        minprice_query = request.data.get('minprice')
        if minprice_query != ' ' and minprice_query is not None and minprice_query!= '':
            queryset = queryset.filter(minprice__gte = int(minprice_query))

        maxprice_query = request.data.get('maxprice')
        if maxprice_query != ' ' and maxprice_query is not None and maxprice_query!= '':
            queryset = queryset.filter(maxprice__lte = int(maxprice_query))

        bedrooms_query = request.data.get('bedrooms')
        if bedrooms_query != ' ' and bedrooms_query is not None and bedrooms_query != '':
            queryset = queryset.filter(bedrooms__gte = int(bedrooms_query))

        bathrooms_query = request.data.get('bathrooms')
        if bathrooms_query != ' ' and bathrooms_query is not None and bathrooms_query != '':
            queryset = queryset.filter(bathrooms__gte = int(bathrooms_query))

        sqft_query = request.data.get('sqft')
        if sqft_query != ' ' and sqft_query is not None and sqft_query != '':
            queryset = queryset.filter(sqft__gte = int(sqft_query))
        serializer = ListingSerializer(queryset,many = True)
        return Response(serializer.data)
