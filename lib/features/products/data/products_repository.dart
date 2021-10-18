import 'dart:io';

import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:path_provider/path_provider.dart';
import 'package:penseapp/features/products/error/failures.dart';
import 'package:penseapp/features/products/models/product_model.dart';
import 'package:penseapp/shared/drivers/http/http_driver.dart';
import 'package:penseapp/shared/error/failures.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

final productsRepositoryProvider = Provider(
  (ref) => ProductsRepository(
    ref.read(dioDriverProvider),
  ),
);

class ProductsRepository {
  ProductsRepository(this.httpDriver);

  final HttpDriver httpDriver;

  Future<Result<Failure, List<ProductModel>>> getProducts() async {
    try {
      final response = await httpDriver.get(
        subPath: 'products/name_asc',
      );

      if (response.statusCode == 200) {
        final jsonList = List.from(response.data as List);
        final products = jsonList
            .map((e) => ProductModel.fromMap(e as Map<String, dynamic>))
            .toList();

        return Success(products);
      }

      return Error(ProductsFetchingFailure());
    } catch (e) {
      return Error(ServerFailure());
    }
  }

  Future<Result<Failure, String>> saveList(List<ProductModel> products) async {
    try {
      final pdf = pw.Document();

      pdf.addPage(pw.Page(
          pageFormat: PdfPageFormat.a4,
          build: (pw.Context context) {
            pw.Text("Sua lista de desejos",
                style:
                    pw.TextStyle(fontSize: 20, fontWeight: pw.FontWeight.bold));
            products.map((e) => pw.Column(children: [pw.Bullet(text: e.name)]));
            return pw.Center(
              child: pw.Text("Hello World"),
            );
          }));

      final output = await getTemporaryDirectory();
      final file = File("${output.path}/wishlist.pdf");
      final result = await file.writeAsBytes(await pdf.save());

      if (await result.exists()) {
        return Success('');
      }

      return Error(SavingWishListFailure());
    } catch (e) {
      return Error(ServerFailure());
    }
  }
}
