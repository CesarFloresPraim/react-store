from django.urls import path, include
from . import views

urlpatterns = [
    path('products/<int:id>', views.ProductView.as_view(), name="products"),
]