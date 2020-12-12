from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    slugname=serializers.SlugRelatedField(read_only=True,slug_field='name')
    class Meta:
        model = Listing
        fields = ('slugname','name','propertyfor','housetype','accomdationtype','title','housenumber', 'description','address', 'city', 'state', 'zipcode','numberoffloors','propertyfloor','bedrooms', 'bathrooms','minprice', 'sqft','pets','photo_1','photo_2','photo_3')

class listingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'





