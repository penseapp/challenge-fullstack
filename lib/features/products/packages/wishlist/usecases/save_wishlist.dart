import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:penseapp/features/products/data/products_repository.dart';
import 'package:penseapp/features/products/error/failures.dart';
import 'package:penseapp/features/products/models/product_model.dart';
import 'package:penseapp/shared/error/failures.dart';
import 'package:penseapp/shared/services/connection/connection_check_service.dart';

final saveWishListProvider = Provider((ref) => SaveWishList(
    ref.read(productsRepositoryProvider),
    ref.read(connectionCheckServiceProvider)));

class SaveWishList {
  SaveWishList(this.productsRepository, this.connectionCheckService);

  final ProductsRepository productsRepository;
  final ConnectionCheckService connectionCheckService;

  Future<Result<Failure, String>> call(List<ProductModel> products) async {
    if (await connectionCheckService.hasConnection()) {
      await productsRepository.saveList(products);
      return Success('');
    } else {
      return Error(SavingWishListConnectionFailure());
    }
  }
}
