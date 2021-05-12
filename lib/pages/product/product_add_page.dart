import 'package:flutter/material.dart';
import 'package:frontend/controllers/product_controller.dart';

class ProductAddPage extends StatelessWidget {
  final ProductController productController = ProductController();
  final _nameController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _priceController = TextEditingController();
  final _promotionalPriceController = TextEditingController();
  final _statusFlagController = TextEditingController();
  final _categoryController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Novo produto'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(25),
        child: ListView(
          children: <Widget>[
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                ListTile(
                  title: Text('Nome'),
                ),
                TextField(
                  autofocus: true,
                  controller: _nameController,
                  decoration: InputDecoration(hintText: 'Adicione um nome'),
                ),
                ListTile(
                  title: Text('Descrição'),
                ),
                TextField(
                  controller: _descriptionController,
                  decoration:
                      InputDecoration(hintText: 'Adicione uma descrição'),
                ),
                ListTile(
                  title: Text('Preço'),
                ),
                TextField(
                  controller: _priceController,
                  decoration:
                      InputDecoration(hintText: 'Adicione o valor do produto'),
                ),
                ListTile(
                  title: Text('Preço promocional'),
                ),
                TextField(
                  controller: _promotionalPriceController,
                  decoration:
                      InputDecoration(hintText: 'Adicione o preço promcional'),
                ),
                ListTile(
                  title: Text('flag de status'),
                ),
                TextField(
                  controller: _statusFlagController,
                  decoration:
                      InputDecoration(hintText: 'Adicione o status do produto'),
                ),
                ListTile(
                  title: Text('Categoria'),
                ),
                TextField(
                  controller: _categoryController,
                  decoration:
                      InputDecoration(hintText: 'Informe uma categoria'),
                ),
                ElevatedButton(
                  onPressed: () {
                    final _name = _nameController.text;
                    final _description = _descriptionController.text;
                    final _price = _priceController.text;
                    final _promotionalPrice = _promotionalPriceController.text;
                    final _statusFlag = _statusFlagController.text;
                    final _category = _categoryController.text;

                    productController.saveProduct(_name, _description, _price,
                        _promotionalPrice, _statusFlag, _category, context);
                  },
                  child: Text('Salvar'),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
