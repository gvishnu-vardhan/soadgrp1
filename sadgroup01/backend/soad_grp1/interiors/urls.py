from django.urls import path
from .views import OwnerView,CreateView


urlpatterns = [
   
    
    path('interior/create/',CreateView.as_view(),name="interior"),
    path('interior/<slug:slug>/',OwnerView.as_view(),name="home"),
]


