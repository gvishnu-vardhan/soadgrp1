from rest_framework import serializers
from .models import Interiors



class InteriorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interiors
        fields = '__all__'
        lookup_field = 'slug'
