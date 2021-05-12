import 'package:flutter/foundation.dart';

class Auth {
  final String email;
  final String password;

  Auth({
    @required this.email,
    @required this.password,
  });

  factory Auth.fromJson(Map<String, dynamic> json) {
    return Auth(
      email: json['email'] as String,
      password: json['password'] as String,
    );
  }
}
