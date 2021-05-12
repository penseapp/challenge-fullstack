import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:frontend/pages/product/product_list_page.dart';
import 'package:http/http.dart';
import '../utils/strings.dart';

class AuthController {
  Future<bool> login(String email, String password) async {
    try {
      Response res = await get(
        Uri.parse('$BASE_URL$AUTH_URL'),
        headers: {
          'email': email,
          'password': password,
        },
      );

      if (res.statusCode == 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      print(e);
      return false;
    }
  }

  Future<String> getLoginToken(String email, String password) async {
    try {
      Response res = await get(
        Uri.parse('$BASE_URL$AUTH_URL'),
        headers: {
          'email': email,
          'password': password,
        },
      );

      print(res.body.toString());
      if (res.statusCode == 200) {
        dynamic body = jsonDecode(res.body);

        return body['token'].toString();
      } else {
        return null;
      }
    } catch (e) {
      print(e);
      return null;
    }
  }

  Future<void> userNewAcount(
    String name,
    String email,
    String password,
    context,
  ) async {
    const Utf8Codec utf8 = Utf8Codec();

    try {
      Response res = await post(
        Uri.parse('$BASE_URL$USER_URL'),
        encoding: utf8,
        body: jsonEncode(
          {
            'name': name,
            'email': email,
            'password': password,
          },
        ),
        headers: {
          AUTH: '1',
          'Content-Type': 'application/json',
        },
      );

      if (res.statusCode == 200) {
        print('POST');
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ProductListPage(),
          ),
        );
      } else {
        throw 'Não foi possível cadastrar o usuário';
      }
    } catch (e) {
      print(e);
    }
  }
}
