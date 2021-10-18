import 'package:bloc/bloc.dart';
import 'package:bloc_riverpod/bloc_riverpod.dart';
import 'package:penseapp/features/products/error/failures.dart';
import 'package:penseapp/features/products/models/product_model.dart';
import 'package:penseapp/features/products/packages/home/usecases/list_products.dart';

part 'products_event.dart';
part 'products_state.dart';

final productsBlocProvider = BlocProvider.autoDispose(
  (ref) => ProductsBloc(
    ref.read(listProductsProvider),
  ),
);

class ProductsBloc extends Bloc<ProductsEvent, ProductsState> {
  ProductsBloc(this.listProducts) : super(ProductsLoadSuccess(products: [])) {
    add(LoadProducts());
  }

  final ListProducts listProducts;
  @override
  Stream<ProductsState> mapEventToState(ProductsEvent event) async* {
    if (event is LoadProducts) {
      final result = await listProducts();

      yield result.when(
        (error) {
          if (error is FetchingProductsConnectionFailure) {
            return ConnectionFail();
          } else if (error is ProductsFetchingFailure) {
            return ProductsLoadFail();
          }
          return ProductsLoadFail();
        },
        (list) {
          return ProductsLoadSuccess(products: list);
        },
      );
    }
  }
}
