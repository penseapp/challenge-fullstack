// coverage:ignore-file

import 'package:flutter/material.dart';
import 'package:penseapp/features/auth/packages/login/login_page.dart';
import 'package:penseapp/features/auth/packages/signUp/sign_up_page.dart';

class AppRoutes {
  AppRoutes._();

  static Map<String, Widget Function(BuildContext)> get routes => {
        LoginPage.routeName: (context) => LoginPage(),
        SignUpPage.routeName: (context) => SignUpPage(), 
      };
}
