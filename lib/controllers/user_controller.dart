import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:frontend/pages/user/user_list_page.dart';
import 'package:http/http.dart';
import '../models/user.dart';
import '../utils/strings.dart';

class UserController {
  Future<List<User>> listUser() async {
    try {
      Response res = await get(
        Uri.parse('$BASE_URL$USER_URL'),
        headers: {AUTH: '1'},
      );

      if (res.statusCode == 200) {
        List<dynamic> body = jsonDecode(res.body);

        List<User> user =
            body.map((dynamic item) => User.fromJson(item)).toList();

        return user;
      } else {
        throw "Não foi possível carregar os usuários";
      }
    } catch (e) {
      print('Error ' + e);
      return null;
    }
  }

  Future<void> saveUser(
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
        print("POST");
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => UserListPage(),
          ),
        );
      } else {
        throw "Não foi possível cadastrar o usuário";
      }
    } catch (e) {
      print('Error ' + e);
    }
  }
}
