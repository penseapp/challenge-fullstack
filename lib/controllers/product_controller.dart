import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:frontend/models/product.dart';
import 'package:frontend/pages/product/product_list_page.dart';
import 'package:http/http.dart';
import '../utils/strings.dart';

class ProductController {
  Future<List<Product>> listProduct() async {
    try {
      Response res = await get(
        Uri.parse('$BASE_URL$PRODUCT_URL'),
        headers: {AUTH: '1'},
      );

      if (res.statusCode == 200) {
        List<dynamic> body = jsonDecode(res.body);

        List<Product> product =
            body.map((dynamic item) => Product.fromJson(item)).toList();

        return product;
      } else {
        throw "Não foi possível carregar os produtos";
      }
    } catch (e) {
      print('Error ' + e);
      return null;
    }
  }

  Future<void> saveProduct(
      String name,
      String description,
      String price,
      String promotionalPrice,
      String statusFlag,
      String category,
      context) async {
    const Utf8Codec utf8 = Utf8Codec();

    try {
      Response res = await post(
        Uri.parse('$BASE_URL$PRODUCT_URL'),
        encoding: utf8,
        body: jsonEncode(
          {
            'name': name,
            'description': description,
            'price': price,
            'promotional_price': promotionalPrice,
            'status_flag': statusFlag,
            'category': category
          },
        ),
        headers: {
          AUTH: '1',
          'Content-Type': 'application/json',
        },
      );

      print(res.body);
      if (res.statusCode == 200) {
        print("POST");
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ProductListPage(),
          ),
        );
      } else {
        throw "Não foi possível cadastrar o produto";
      }
    } catch (e) {
      print('Error ' + e);
    }
  }

  Future<void> deleteProduct(int id, context) async {
    try {
      Response res = await delete(
        Uri.parse("$BASE_URL$PRODUCT_URL/$id"),
        headers: {AUTH: '$id'},
      );

      if (res.statusCode == 200) {
        print("DELETED");
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ProductListPage(),
          ),
        );
      } else {
        throw "Não foi possível deletar o produto";
      }
    } catch (e) {
      print('Error ' + e);
    }
  }
}
