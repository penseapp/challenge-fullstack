from django.urls import path
from products.views import ProductView

urlpatterns = [
    path("products/", ProductView.as_view(), name="product-view"),
]
