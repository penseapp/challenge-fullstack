import 'dart:convert';

import 'package:http/http.dart';

class NetworkService {
  final baseUrl = 'http://10.0.2.2:3333';

  Future<List<dynamic>> fetchStore() async {
    try {
      final response = await get(Uri.parse(baseUrl + '/store'),
          headers: {"authorization": "1"});
      print(response.body);
      return jsonDecode(response.body) as List;
    } catch (e) {
      print(e);
      return [];
    }
  }

  Future<List<dynamic>> fetchProduct() async {
    try {
      final response = await get(Uri.parse(baseUrl + '/product'),
          headers: {"authorization": "1"});
      print(response.body);
      return jsonDecode(response.body) as List;
    } catch (e) {
      print(e);
      return [];
    }
  }

  Future<Map> addStore(Map<String, String> storeObj) async {
    print('NetworkService.addStore => ' + storeObj.toString());
    try {
      final response = await post(
        Uri.parse(baseUrl + '/store'),
        headers: <String, String>{'authorization': '1'},
        body: jsonEncode(<String, String>{
          'name': storeObj['name'],
          'description': storeObj['description']
        }),
      );
      return jsonDecode(response.body);
    } catch (e) {
      print(e);
      return null;
    }
  }
}
