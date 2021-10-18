import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/features/products/packages/home/bloc/products_bloc.dart';
import 'package:penseapp/features/products/packages/wishlist/bloc/wish_list_bloc.dart';
import 'package:penseapp/features/products/packages/wishlist/wishlist_page.dart';
import 'package:penseapp/shared/consts/app_strings.dart';
import 'package:penseapp/shared/widgets/app_bar/custom_app_bar.dart';

class ProductsPage extends StatefulHookWidget {
  static const String routeName = '/products';

  @override
  State<ProductsPage> createState() => _ProductsPageState();
}

class _ProductsPageState extends State<ProductsPage> {
  @override
  Widget build(BuildContext context) {
    final productsBloc = useProvider(productsBlocProvider);
    final wishListBloc = useProvider(wishListBlocProvider);

    final state = productsBloc.state;

    WidgetsBinding.instance!.addPostFrameCallback(
        (_) => showSnackbarByProductsState(context, state, productsBloc));

    return Scaffold(
      appBar: CustomAppBar(title: AppStrings.productsList, icon: IconButton(
            onPressed: () => Navigator.pushNamed(context, WishListPage.routeName),
            icon: Icon(
              Icons.shopping_bag,
              size: 30,
              color: Colors.black,
            ),
            tooltip: 'wishlist',
          )),
      body: Visibility(
        visible: productsBloc.products.isNotEmpty,
        child: SingleChildScrollView(
          child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 50),
              child: Column(
                  children: productsBloc.products.isNotEmpty ? productsBloc.products.
                      map((e) => ListTile(
                            contentPadding: EdgeInsets.only(top: 10),
                            title: Text(
                              "${e.name} - R\$ ${e.promoPrice}",
                              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                            ),
                            subtitle: Text(
                              e.description,
                              style: TextStyle(fontSize: 18),
                            ),
                            leading: Image.network(e.imageUrl),
                            trailing: IconButton(
                                onPressed: () => wishListBloc
                                    .add(AddProductToList(product: e)),
                                icon: Icon(Icons.add, size: 30, color: Colors.black)),
                          ))
                      .toList() : [])),
        ),
      ),
    );
  }

  void showSnackbarByProductsState(
      BuildContext context, ProductsState state, ProductsBloc productsBloc) {
    SnackBar? snackBar;

    if (state is ProductsLoadFail) {
      snackBar = SnackBar(
        content: Text(AppStrings.productsLoadFailMessage),
        key: ValueKey('productsFail'),
      );
    } else if (state is ConnectionFail) {
      snackBar = SnackBar(
        content: Text(AppStrings.connectionFail),
        key: ValueKey('connectionFail'),
      );
    }

    if (snackBar != null) {
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
      productsBloc.add(ResetProducts());
    }
  }
}
