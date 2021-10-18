part of 'products_bloc.dart';

abstract class ProductsState {}

class ProductsEmpty extends ProductsState {}

class ProductsLoadSuccess extends ProductsState {
  ProductsLoadSuccess({
    required this.products,
  });

  final List<ProductModel> products;
}

class ProductsLoadFail extends ProductsState {}

class ConnectionFail extends ProductsState {}
