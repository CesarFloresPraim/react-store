from django.urls import path, include
from . import views

urlpatterns = [
    path('products/<int:id>', views.ProductView.as_view(), name="products"),
    path('checkout/', views.CheckoutSession.as_view(), name="checkout"),
]