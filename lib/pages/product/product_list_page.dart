import 'package:flutter/material.dart';
import 'package:frontend/controllers/product_controller.dart';
import 'package:frontend/pages/product/product_add_page.dart';
import 'product_detail_page.dart';
import '../../models/product.dart';

class ProductListPage extends StatefulWidget {
  @override
  _ProductListPageState createState() => _ProductListPageState();
}

class _ProductListPageState extends State<ProductListPage> {
  final ProductController productController = ProductController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ProductAddPage(),
            ),
          );
        },
        child: Icon(Icons.add),
      ),
      appBar: AppBar(
        title: Text('Produtos'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(25),
        child: FutureBuilder(
          future: productController.listProduct(),
          builder:
              (BuildContext context, AsyncSnapshot<List<Product>> snapshot) {
            if (snapshot.hasData) {
              List<Product> product = snapshot.data;
              return ListView(
                children: product
                    .map(
                      (Product product) => Column(
                        children: <Widget>[
                          ListTile(
                            title: Text(product.name),
                            subtitle: Row(
                              children: [
                                Column(
                                  children: [
                                    Text(product.description),
                                    Text(product.price),
                                    Text(product.promotionalPrice),
                                    Text(product.statusFlag),
                                    Text(product.category),
                                  ],
                                ),
                              ],
                            ),
                            onTap: () => Navigator.of(context).push(
                              MaterialPageRoute(
                                builder: (context) => ProductDetailPage(
                                  product: product,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    )
                    .toList(),
              );
            } else {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
          },
        ),
      ),
    );
  }
}
