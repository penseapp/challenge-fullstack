import 'package:flutter/foundation.dart';

class Store {
  final int id;
  final String name;
  final String description;

  Store({
    @required this.id,
    this.name,
    this.description,
  });

  factory Store.fromJson(Map<String, dynamic> json) {
    return Store(
      id: json['id'] as int,
      name: json['name'] as String,
      description: json['description'] as String,
    );
  }
}
