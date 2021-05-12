import 'package:flutter/material.dart';
import 'package:frontend/controllers/store_controller.dart';
import '../../models/store.dart';

class StoreDetailPage extends StatelessWidget {
  final StoreController storeController = StoreController();
  final Store store;

  StoreDetailPage({@required this.store});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detalhes da ' + store.name),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.delete),
            onPressed: () async {
              await storeController.deleteStore(store.id, context);
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            children: <Widget>[
              Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    ListTile(
                      title: Text('Nome'),
                      subtitle: Text(store.name),
                    ),
                    ListTile(
                      title: Text('Descrição'),
                      subtitle: Text(store.description),
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
