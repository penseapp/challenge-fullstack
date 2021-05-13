import 'package:flutter/material.dart';
import 'package:frontend/controllers/product_controller.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../models/product.dart';

class WishListPage extends StatefulWidget {
  @override
  _WishListPageState createState() => _WishListPageState();
}

class _WishListPageState extends State<WishListPage> {
  final ProductController productController = ProductController();
  List<String> _wishList;

  void initState() {
    super.initState();
    productController.wishListProduct(_wishList);
    _loadWishList();

    if (_wishList == null) {
      _wishList = [];
    }
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
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: FutureBuilder(
          future: productController.wishListProduct(_wishList),
          builder:
              (BuildContext context, AsyncSnapshot<List<Product>> snapshot) {
            if (snapshot.hasData) {
              List<Product> product = snapshot.data;
              return ListView(
                children: product
                    .map(
                      (Product product) => Card(
                        child: SizedBox(
                          width: double.infinity,
                          child: Column(
                            children: [
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceAround,
                                children: [
                                  Padding(
                                    padding: const EdgeInsets.only(top: 10),
                                    child: Column(
                                      children: [
                                        InkWell(
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
                                        Text(
                                          product.name,
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold,
                                              fontSize: 18),
                                        ),
                                        Text('Preço: ' + product.price),
                                        Text('Preço promocional: ' +
                                            product.promotionalPrice),
                                      ],
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(bottom: 10),
                                    child: Column(children: [
                                      Text(product.description),
                                      Text(product.statusFlag),
                                      Text(product.category),
                                    ]),
                                  )
                                ],
                              ),
                              Row(
                                children: [],
                              ),
                              Padding(
                                padding: const EdgeInsets.only(bottom: 15),
                                child: Row(
                                  children: [],
                                ),
                              ),
                            ],
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
