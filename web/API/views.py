from rest_framework import viewsets
from .serializers import (
    CategorySerializer,
    ExporterSerializer,
    LotSerializer,
    CategoryDetailSerializer,
    ExporterDetailSerializer
)

from ..models import Category, Exporter, Lot

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    action_to_serializer = {
        'retrieve': CategoryDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

class ExporterViewSet(viewsets.ModelViewSet):
    queryset = Exporter.objects.all()
    serializer_class = ExporterSerializer

    action_to_serializer = {
        'retrieve': ExporterDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

class LotViewSet(viewsets.ModelViewSet):
    queryset = Lot.objects.all()
    serializer_class = LotSerializer