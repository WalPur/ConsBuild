from django.urls import path

from rest_framework import routers
from .views import CategoryViewSet, ExporterViewSet, LotViewSet, ProfileViewSet

router = routers.SimpleRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('exporter', ExporterViewSet, basename='exporter')
router.register('lot', LotViewSet, basename='lot')
router.register('profile', ProfileViewSet, basename='profile')

urlpatterns = []
urlpatterns += router.urls
