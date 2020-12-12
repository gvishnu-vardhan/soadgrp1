from rest_framework import serializers
from .models import Packers

class PackersSerializer(serializers.ModelSerializer):
    slugname=serializers.SlugRelatedField(read_only=True,slug_field='name')
    class Meta:
        model = Packers
        fields = ('slugname','name','phonenumber','email_id','from_address', 'from_city', 'from_state', 'from_zipcode','Num_of_workers_required','Num_of_trucks_required','to_address', 'to_city', 'to_state', 'to_zipcode','date_of_moving')

class PackersDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Packers
        fields = '__all__'
        lookup_field = 'slug'
