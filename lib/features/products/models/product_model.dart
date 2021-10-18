import 'dart:convert';

import 'package:equatable/equatable.dart';

class ProductModel extends Equatable {
  ProductModel({
    required this.name,
    required this.description,
    required this.price,
    required this.promoPrice,
    required this.statusFlag,
    required this.imageUrl,
    required this.category,
  });

  factory ProductModel.fromMap(Map<String, dynamic> map) {
    return ProductModel(
      name: map['name'] as String,
      description: map['description'] as String,
      price: double.tryParse(map['price']) ?? 0,
      promoPrice: double.tryParse(map['promoPrice']) ?? 0,
      statusFlag: map['statusFlag'] as String,
      imageUrl: map['imageUrl'] as String,
      category: map['category'] as String,
    );
  }

  final String name;
  final String description;
  final double price;
  final double promoPrice;
  final String statusFlag;
  final String imageUrl;
  final String category;

  @override
  List<Object?> get props => [
        name,
        description,
        price,
        promoPrice,
        statusFlag,
        imageUrl,
        category,
      ];

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'description': description,
      'price': price,
      'promoPrice': promoPrice,
      'statusFlag': statusFlag,
      'imageUrl': imageUrl,
      'category': category,
    };
  }

  String toJson() => json.encode(toMap());
}
