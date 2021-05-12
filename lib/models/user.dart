import 'package:flutter/foundation.dart';

class User {
  final int id;
  final String name;
  final String token;
  final String email;
  final String password;

  User({
    @required this.id,
    this.name,
    this.token,
    this.email,
    this.password,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] as int,
      name: json['name'] as String,
      token: json['token'] as String,
      email: json['email'] as String,
      password: json['password'] as String,
    );
  }
}
