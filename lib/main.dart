import 'package:flutter/material.dart';
import 'package:frontend/pages/product/product_list_page.dart';
import 'package:frontend/pages/store/store_list_page.dart';
import 'package:frontend/pages/user/user_list_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'HTTP',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: ProductListPage(),
    );
  }
}
