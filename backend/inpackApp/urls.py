from django.urls import path, include
from . import views

urlpatterns = [
    path('csrfToken/', views.CsrfTokenView.as_view(), name="csrfToken"),
    path('products/', views.ProductListView.as_view(), name="products"),
]