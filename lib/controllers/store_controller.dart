import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:frontend/pages/store/store_list_page.dart';
import 'package:http/http.dart';
import '../models/store.dart';
import '../utils/strings.dart';

class StoreController {
  Future<List<Store>> listStore() async {
    try {
      Response res = await get(
        Uri.parse('$BASE_URL$STORE_URL'),
        headers: {AUTH: '1'},
      );

      if (res.statusCode == 200) {
        List<dynamic> body = jsonDecode(res.body);

        List<Store> store =
            body.map((dynamic item) => Store.fromJson(item)).toList();

        return store;
      } else {
        throw "Não foi possível carregar as lojas";
      }
    } catch (e) {
      print('Error ' + e);
      return null;
    }
  }

  Future<void> saveStore(String name, String description, context) async {
    const Utf8Codec utf8 = Utf8Codec();

    try {
      Response res = await post(
        Uri.parse('$BASE_URL$STORE_URL'),
        encoding: utf8,
        body: jsonEncode(
          {'name': name, 'description': description},
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
            builder: (context) => StoreListPage(),
          ),
        );
      } else {
        throw "Não foi possível cadastrar a loja";
      }
    } catch (e) {
      print('Error ' + e);
    }
  }

  Future<void> deleteStore(int id, context) async {
    try {
      Response res = await delete(
        Uri.parse("$BASE_URL$STORE_URL/$id"),
        headers: {AUTH: '$id'},
      );

      if (res.statusCode == 200) {
        print("DELETED");
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => StoreListPage(),
          ),
        );
      } else {
        throw "Não foi possível deletar a loja";
      }
    } catch (e) {
      print('Error ' + e);
    }
  }
}
