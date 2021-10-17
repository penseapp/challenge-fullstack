part of 'signup_bloc.dart';

abstract class SignUpState {}

class SignUpInitial extends SignUpState {}

class SignUpInProgress extends SignUpState {}

class SignUpSuccess extends SignUpState {}

class SignUpFail extends SignUpState {}

class SignUpConnectionFail extends SignUpState {}