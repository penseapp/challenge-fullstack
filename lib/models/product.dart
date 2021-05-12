import 'package:flutter/foundation.dart';

class Product {
  final int id;
  final String name;
  final String description;
  final String price;
  final String promotionalPrice;
  final String statusFlag;
  final String category;

  Product(
      {@required this.id,
      @required this.name,
      this.description,
      this.price,
      this.promotionalPrice,
      this.statusFlag,
      this.category});

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
        id: json['id'] as int,
        name: json['name'] as String,
        description: json['description'] as String,
        price: json['price'] as String,
        promotionalPrice: json['promotional_price'] as String,
        statusFlag: json['status_flag'] as String,
        category: json['category'] as String);
  }
}
