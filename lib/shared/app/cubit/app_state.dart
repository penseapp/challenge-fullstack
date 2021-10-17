part of 'app_cubit.dart';

abstract class AppState {}

class AppStateInitial extends AppState {
}

class AppStateSuccess extends AppState {
  AppStateSuccess({this.session});

  final Session? session;
}
