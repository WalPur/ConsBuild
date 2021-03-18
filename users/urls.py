from django.conf.urls import url
from .views import *
 
urlpatterns = [
    url(r'^create/$', CreateUserAPIView.as_view()),
    url(r'^obtain_token/$', authenticate_user),
    url(r'^update/$', UserRetrieveUpdateAPIView.as_view()),
]