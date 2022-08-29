from rest_framework import generics
from products.serializers import ProductSerializer
from .models import Product


class ProductView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
