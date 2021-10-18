part of 'products_bloc.dart';

abstract class ProductsEvent {}

class LoadProducts extends ProductsEvent {}

class ResetProducts extends ProductsEvent {}
