// coverage:ignore-file

import 'package:flutter/material.dart';
import 'package:penseapp/features/auth/packages/login/login_page.dart';
import 'package:penseapp/features/auth/packages/signUp/sign_up_page.dart';
import 'package:penseapp/features/products/packages/home/products_page.dart';
import 'package:penseapp/features/products/packages/wishlist/wishlist_page.dart';
import 'package:penseapp/features/splash/packages/splash/splash_page.dart';

class AppRoutes {
  AppRoutes._();

  static Map<String, Widget Function(BuildContext)> get routes => {
        SplashPage.routeName: (context) => SplashPage(),
        LoginPage.routeName: (context) => LoginPage(),
        SignUpPage.routeName: (context) => SignUpPage(),
        ProductsPage.routeName: (context) => ProductsPage(),
        WishListPage.routeName: (context) => WishListPage(),
      };
}
