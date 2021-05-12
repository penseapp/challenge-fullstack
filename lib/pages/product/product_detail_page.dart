import 'package:flutter/material.dart';
import 'package:frontend/controllers/product_controller.dart';
import '../../models/product.dart';

class ProductDetailPage extends StatelessWidget {
  final ProductController productController = ProductController();
  final Product product;

  ProductDetailPage({@required this.product});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detalhes do ' + product.name),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.delete),
            onPressed: () async {
              await productController.deleteProduct(product.id, context);
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(25),
          child: Column(
            children: <Widget>[
              Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    ListTile(
                      title: Text('Nome'),
                      subtitle: Text(product.name),
                    ),
                    ListTile(
                      title: Text('Descrição'),
                      subtitle: Text(product.description),
                    ),
                    ListTile(
                      title: Text('Preço'),
                      subtitle: Text(product.price),
                    ),
                    ListTile(
                      title: Text('Preço promocional'),
                      subtitle: Text(product.promotionalPrice),
                    ),
                    ListTile(
                      title: Text('Flag de status'),
                      subtitle: Text(product.statusFlag),
                    ),
                    ListTile(
                      title: Text('Categoria'),
                      subtitle: Text(product.category),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
