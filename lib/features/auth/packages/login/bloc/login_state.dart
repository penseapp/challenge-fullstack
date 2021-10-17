part of 'login_bloc.dart';

abstract class LoginState {}

class LoginInitial extends LoginState {}

class LoginInProgress extends LoginState {}

class LoginSuccess extends LoginState {
  LoginSuccess(this.session);
  
  final Session session;
}

class LoginInvalid extends LoginState {}

class LoginFail extends LoginState {}

class ConnectionFail extends LoginState {}