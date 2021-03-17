from rest_framework import serializers

from ..models import Category, Exporter, Lot, Profile

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ExporterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exporter
        fields = '__all__'

class LotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lot
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'