from django.urls import path

from rest_framework import routers
from .views import CategoryViewSet, ExporterViewSet, LotViewSet

router = routers.SimpleRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('exporter', ExporterViewSet, basename='exporter')
router.register('lot', LotViewSet, basename='lot')

urlpatterns = []
urlpatterns += router.urls
