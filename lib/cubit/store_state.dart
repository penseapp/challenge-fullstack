part of 'store_cubit.dart';

@immutable
abstract class StoreState {}

class StoreInitial extends StoreState {}

class StoreLoaded extends StoreState {
  final List<Store> store;

  StoreLoaded({this.store});
}
