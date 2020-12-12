from django.urls import path
from .views import OwnerView,CreateView,page_view


urlpatterns = [
    path("", page_view, name="home"),
    
    path('packer/create/',CreateView.as_view(),name="packer"),
    path('packer/<slug:slug>/',OwnerView.as_view(),name="mover"),
]


