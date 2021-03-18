from rest_framework import serializers

from ..models import Category, Exporter, Lot

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CategoryDetailSerializer(serializers.ModelSerializer):
    lots = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'
    
    @staticmethod
    def get_lots(obj):
        return LotSerializer(Lot.objects.filter(category=obj), many=True).data

class ExporterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exporter
        fields = '__all__'

class ExporterDetailSerializer(serializers.ModelSerializer):
    lots = serializers.SerializerMethodField()

    class Meta:
        model = Exporter
        fields = '__all__'
    
    @staticmethod
    def get_lots(obj):
        return LotSerializer(Lot.objects.filter(shop=obj), many=True).data

class LotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lot
        fields = '__all__'