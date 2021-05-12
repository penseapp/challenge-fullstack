import 'package:flutter/material.dart';
import 'package:frontend/controllers/store_controller.dart';

class StoreAddPage extends StatelessWidget {
  final StoreController storeController = StoreController();
  final _nameController = TextEditingController();
  final _descriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Nova Loja'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: <Widget>[
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                ListTile(
                  title: Text("Nome"),
                ),
                TextField(
                  autofocus: true,
                  controller: _nameController,
                  decoration: InputDecoration(hintText: 'Adicione um nome'),
                ),
                ListTile(
                  title: Text("Descrição"),
                ),
                TextField(
                  controller: _descriptionController,
                  decoration:
                      InputDecoration(hintText: 'Adicione uma descrição'),
                ),
                ElevatedButton(
                  onPressed: () {
                    final _name = _nameController.text;
                    final _description = _descriptionController.text;

                    storeController.saveStore(_name, _description, context);
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
