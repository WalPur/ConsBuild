from rest_framework import viewsets
from .serializers import (
    CategorySerializer,
    ExporterSerializer,
    LotSerializer,
    ProfileSerializer,
)

from ..models import Category, Exporter, Lot, Profile

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ExporterViewSet(viewsets.ModelViewSet):
    queryset = Exporter.objects.all()
    serializer_class = ExporterSerializer

class LotViewSet(viewsets.ModelViewSet):
    queryset = Lot.objects.all()
    serializer_class = LotSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer