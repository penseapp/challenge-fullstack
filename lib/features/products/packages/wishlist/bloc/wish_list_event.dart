part of 'wish_list_bloc.dart';

abstract class WishListEvent {
  const WishListEvent();
}

class AddProductToList extends WishListEvent {
  AddProductToList({
    required this.product,
  });

  final ProductModel product;
}

class SaveWishListToPdf extends WishListEvent {}
