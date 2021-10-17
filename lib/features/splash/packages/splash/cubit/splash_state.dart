part of 'splash_cubit.dart';

abstract class SplashState {}

class SplashInitial extends SplashState {}

class SplashComplete extends SplashState {
  SplashComplete(this.session);
  final Session? session;
}
