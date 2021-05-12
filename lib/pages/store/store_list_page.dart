import 'package:flutter/material.dart';
import 'package:frontend/controllers/store_controller.dart';
import 'package:frontend/pages/store/store_add_page.dart';
import 'store_detail_page.dart';
import '../../models/store.dart';

class StoreListPage extends StatefulWidget {
  @override
  _StoreListPageState createState() => _StoreListPageState();
}

class _StoreListPageState extends State<StoreListPage> {
  final StoreController storeController = StoreController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => StoreAddPage(),
            ),
          );
        },
        child: Icon(Icons.add),
      ),
      appBar: AppBar(
        title: Text('Lojas'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(25),
        child: FutureBuilder(
          future: storeController.listStore(),
          builder: (BuildContext context, AsyncSnapshot<List<Store>> snapshot) {
            if (snapshot.hasData) {
              List<Store> store = snapshot.data;
              return ListView(
                children: store
                    .map(
                      (Store store) => ListTile(
                        title: Text(store.name),
                        subtitle: Text(store.description),
                        onTap: () => Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => StoreDetailPage(
                              store: store,
                            ),
                          ),
                        ),
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
