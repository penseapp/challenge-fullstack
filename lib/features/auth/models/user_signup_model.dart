import 'dart:convert';

import 'package:equatable/equatable.dart';

class UserSignUpModel extends Equatable {
  UserSignUpModel({
    required this.email,
    required this.password,
    required this.name,
  });

  final String email;
  final String password;
  final String name;

  @override
  List<Object?> get props => [name, email, password];

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
      'password': password,
    };
  }

  String toJson() => json.encode(toMap());
}
