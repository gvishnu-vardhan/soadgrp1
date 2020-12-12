from django.urls import path
from .views import ListingDataView,SearchView,OwnerView,CreateView
from accounts.views import  RegisterView,LoginAPIView

urlpatterns = [

    path('',ListingDataView.as_view()),
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('house/put/<slug:slug>/',OwnerView.as_view(),name="update"),
     path('house/delete/<slug:slug>/',OwnerView.as_view(),name="delete"),
    path('house/create/',CreateView.as_view(),name="post"),
    path('search',SearchView.as_view(),name="search"),
    path('house/<slug:slug>/',OwnerView.as_view(),name="Owner"),
]


