from django.urls import path
from .views import *
 
app_name = 'authentication'
urlpatterns = [
    path('', UserRetrieveUpdateAPIView.as_view()),
    path('registration/', RegistrationAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
]