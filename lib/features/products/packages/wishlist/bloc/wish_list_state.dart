part of 'wish_list_bloc.dart';

abstract class WishListState extends Equatable {
  const WishListState();
  
  @override
  List<Object> get props => [];
}

class WishListInitial extends WishListState {}

class WishListSaved extends WishListState {}

class WishListSaveFail extends WishListState {}

class WishListConnectionFail extends WishListState {}