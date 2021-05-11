import 'package:frontend/src/models/product.dart';
import 'package:frontend/src/models/store.dart';
import 'package:frontend/services/network_service.dart';

class Repository {
  final NetworkService networkService;

  Repository({this.networkService});

  Future<List<Store>> fetchStore() async {
    final storeRaw = await networkService.fetchStore();
    return storeRaw.map((e) => Store.fromJson(e)).toList();
  }

  Future<List<Product>> fetchProduct() async {
    final productRaw = await networkService.fetchProduct();
    return productRaw.map((e) => Product.fromJson(e)).toList();
  }

  Future<Store> addStore(String name, String description) async {
    print('Repository.addStore => ' + name + ', ' + description);
    final storeObj = {'name': name, 'description': description};
    final storeMap = await networkService.addStore(storeObj);

    if (storeMap == null) {
      return null;
    }

    return Store.fromJson(storeMap);
  }
}
