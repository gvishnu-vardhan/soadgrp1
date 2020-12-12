from django.conf.urls import url
from django.contrib import admin
from . import views
from accounts.views import  RegisterView,LoginAPIView

urlpatterns = [
    url(r'^$', views.quotelistapiview.as_view(), name='list'),
	url('register/', RegisterView.as_view(), name="register"),
    url('login/', LoginAPIView.as_view(), name="login"),
	url(r'^(?P<name>\w+)$', views.PostDetailAPIView.as_view(), name='detail'),
	url(r'^create/$', views.quoteCreateAPIView.as_view(), name='create'),
	url(r'^(?P<name>\w+)/update/$', views.PostUpdateAPIView.as_view(), name='update'),
	url(r'^(?P<name>\w+)/delete/$', views.PostDeleteAPIView.as_view(), name='delete'),
	
]
