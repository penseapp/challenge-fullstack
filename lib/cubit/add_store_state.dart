part of 'add_store_cubit.dart';

@immutable
abstract class AddStoreState {}

class AddStoreInitial extends AddStoreState {}

class AddStoreError extends AddStoreState {
  final String error;

  AddStoreError({this.error});
}

class AddingStore extends AddStoreState {}

class StoreAdded extends AddStoreState {}
