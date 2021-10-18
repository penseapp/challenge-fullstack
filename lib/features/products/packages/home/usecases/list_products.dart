import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:penseapp/features/products/data/products_repository.dart';
import 'package:penseapp/features/products/error/failures.dart';
import 'package:penseapp/features/products/models/product_model.dart';
import 'package:penseapp/shared/error/failures.dart';
import 'package:penseapp/shared/services/connection/connection_check_service.dart';

final listProductsProvider = Provider(
  (ref) => ListProducts(
    ref.read(productsRepositoryProvider),
    ref.read(connectionCheckServiceProvider)
  )
);

class ListProducts {
  ListProducts(this.productsRepository, this.connectionCheckService);

  final ProductsRepository productsRepository;
  final ConnectionCheckService connectionCheckService;
  
  Future<Result<Failure, List<ProductModel>>> call() async {
    if (await connectionCheckService.hasConnection()) {
      return productsRepository.getProducts();
    } else {
      return Error(FetchingProductsConnectionFailure());
    }
  }
}
