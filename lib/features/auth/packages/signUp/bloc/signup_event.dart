part of 'signup_bloc.dart';

abstract class SignUpEvent {}

class UserSignUpEvent extends SignUpEvent {
  UserSignUpEvent(this.name, this.email, this.password);

  final String name;
  final String email;
  final String password;
}

class ResetSignUpEvent extends SignUpEvent {}