from products.models import Product
from django.urls import reverse
from rest_framework.test import APIClient, APITestCase
from rest_framework.views import Response, status


class TestProduct(APITestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.client: APIClient

        cls.product_basic_data = {
            "name": "Computador Dell i7",
        }

        cls.product_full_data = {
            "name": "Computador Dell i7",
            "description": "A simple description",
            "price": 500,
            "promo_price": 123,
            "category": "A simple category",
            "status": True,
        }

        cls.base_products_url = reverse("product-view")

    def test_add_product_basic(self):
        response: Response = self.client.post(
            self.base_products_url, data=self.product_basic_data
        )

        expected_status_code = status.HTTP_201_CREATED
        result_status_code = response.status_code

        self.assertEqual(expected_status_code, result_status_code)

    def test_add_product_full(self):
        response: Response = self.client.post(
            self.base_products_url, data=self.product_full_data
        )

        expected_status_code = status.HTTP_201_CREATED
        result_status_code = response.status_code

        self.assertEqual(expected_status_code, result_status_code)
