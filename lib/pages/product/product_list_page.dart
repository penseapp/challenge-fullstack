import 'package:flutter/material.dart';
import 'package:frontend/controllers/product_controller.dart';
import 'package:frontend/pages/login/login_page.dart';
import 'package:frontend/pages/product/product_add_page.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../models/product.dart';

class ProductListPage extends StatefulWidget {
  @override
  _ProductListPageState createState() => _ProductListPageState();
}

class _ProductListPageState extends State<ProductListPage> {
  final ProductController productController = ProductController();
  List<String> _wishList;

  void initState() {
    super.initState();
    productController.listProduct();

    _loadWishList();

    if (_wishList == null) {
      _wishList = [];
    }
  }

  _removeKeepLogin() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      prefs.remove('@store:keep_login');
    });
  }

  void _logout() {
    _removeKeepLogin();

    Navigator.pop(context);

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => LoginPage(),
      ),
    );
  }

  _loadWishList() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _wishList = (prefs.getStringList('@store:wish_list') ?? 0);
    });
  }

  _saveWishList(List<String> products) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      prefs.setStringList('@store:wish_list', products);
    });
  }

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
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: FutureBuilder(
          future: productController.listProduct(),
          builder:
              (BuildContext context, AsyncSnapshot<List<Product>> snapshot) {
            if (snapshot.hasData) {
              List<Product> product = snapshot.data;
              return GridView.count(
                crossAxisCount: 2,
                children: product
                    .map(
                      (Product product) => Column(
                        children: <Widget>[
                          Card(
                            clipBehavior: Clip.antiAlias,
                            child: Column(
                              children: [
                                ListTile(
                                  leading: InkWell(
                                    onTap: () {
                                      if (_wishList.contains(
                                        product.id.toString(),
                                      )) {
                                        _wishList.remove(
                                          product.id.toString(),
                                        );
                                        _saveWishList(_wishList);
                                      } else {
                                        _wishList.add(
                                          product.id.toString(),
                                        );
                                        _saveWishList(_wishList);
                                      }
                                    },
                                    child: _wishList.contains(
                                      product.id.toString(),
                                    )
                                        ? Icon(
                                            Icons.star_outlined,
                                            color: Colors.blue,
                                          )
                                        : Icon(Icons.star_border),
                                  ),
                                  title: Text(
                                    product.name.toString(),
                                  ),
                                  subtitle: Text(
                                    product.description,
                                    style: TextStyle(
                                      color: Colors.black.withOpacity(0.6),
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.all(7.0),
                                  child: Column(
                                    children: [
                                      Text(
                                        'Preço: ${product.price}',
                                        style: TextStyle(
                                          color: Colors.black.withOpacity(0.6),
                                        ),
                                      ),
                                      Text(
                                        'Promoção: ${product.price}',
                                        style: TextStyle(
                                          color: Colors.black.withOpacity(0.6),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(top: 15),
                                  child: Text(
                                    'Status: ${product.statusFlag}',
                                    style: TextStyle(
                                      color: Colors.black.withOpacity(0.6),
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(bottom: 15),
                                  child: Text(
                                    'Categoria: ${product.category}',
                                    style: TextStyle(
                                      color: Colors.black.withOpacity(0.6),
                                    ),
                                  ),
                                ),
                              ],
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
