import 'package:bloc/bloc.dart';
import 'package:frontend/services/repository.dart';
import 'package:frontend/src/models/product.dart';
import 'package:meta/meta.dart';

part 'product_state.dart';

class ProductCubit extends Cubit<ProductState> {
  final Repository repository;

  ProductCubit({this.repository}) : super(ProductInitial());

  void fetchProduct() {
    repository.fetchProduct().then((product) {
      emit(ProductLoaded(product: product));
    });
  }
}
