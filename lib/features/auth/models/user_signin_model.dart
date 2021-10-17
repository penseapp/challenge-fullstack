import 'dart:convert';

import 'package:equatable/equatable.dart';

class UserSignInModel extends Equatable {
  UserSignInModel({
    required this.email,
    required this.password,
  });

  final String email;
  final String password;

  @override
  List<Object?> get props => [email, password];

  Map<String, dynamic> toMap() {
    return {
      'email': email,
      'password': password,
    };
  }

  String toJson() => json.encode(toMap());
}
