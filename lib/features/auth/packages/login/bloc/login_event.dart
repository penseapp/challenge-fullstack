part of 'login_bloc.dart';

abstract class LoginEvent {}

class UserSignInEvent extends LoginEvent {
  UserSignInEvent(this.email, this.password);

  final String email;
  final String password;
}

class ResetLoginEvent extends LoginEvent {}
