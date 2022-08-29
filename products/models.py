from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=120, null=True, blank=True)
    price = models.PositiveIntegerField
    promo_price = models.PositiveIntegerField
    category = models.CharField(max_length=22, null=True, blank=True)
    status = models.BooleanField(blank=True, null=True)
