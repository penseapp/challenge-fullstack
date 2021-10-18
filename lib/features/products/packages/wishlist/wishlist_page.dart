import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/features/products/packages/home/bloc/products_bloc.dart';
import 'package:penseapp/features/products/packages/wishlist/bloc/wish_list_bloc.dart';
import 'package:penseapp/shared/consts/app_strings.dart';
import 'package:penseapp/shared/widgets/app_bar/custom_app_bar.dart';

class WishListPage extends StatefulHookWidget {
  static const String routeName = '/wishlist';

  @override
  State<WishListPage> createState() => _WishListPageState();
}

class _WishListPageState extends State<WishListPage> {
  @override
  Widget build(BuildContext context) {
    final wishListBloc = useProvider(wishListBlocProvider);
    final state = wishListBloc.state;

    WidgetsBinding.instance!.addPostFrameCallback(
        (_) => showSnackbarByWishListState(context, state, wishListBloc));

    return Scaffold(
      appBar: CustomAppBar(title: AppStrings.wishListTitle, icon: IconButton(
            onPressed: () => wishListBloc.add(SaveWishListToPdf()),
            icon: Icon(
              Icons.download,
              size: 30,
              color: Colors.black,
            ),
            tooltip: 'save',
          )),
      body: SingleChildScrollView(
        child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 50),
            child: Column(
                  children: wishListBloc.products.isNotEmpty ? wishListBloc.products.
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
                          ))
                      .toList() : [])),
      ),
    );
  }

  void showSnackbarByWishListState(
      BuildContext context, WishListState state, WishListBloc productsBloc) {
    SnackBar? snackBar;
    if(state is WishListSaved) {
      snackBar = SnackBar(
        content: Text(AppStrings.wishListSavedSuccess),
        key: ValueKey('wishListSaved'),
      );
    } else if (state is WishListSaveFail) {
      snackBar = SnackBar(
        content: Text(AppStrings.wishListSaveFailMessage),
        key: ValueKey('wishListFail'),
      );
    } else if (state is ConnectionFail) {
      snackBar = SnackBar(
        content: Text(AppStrings.connectionFail),
        key: ValueKey('connectionFail'),
      );
    }

    if (snackBar != null) {
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
    }
  }
}
