import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/features/auth/packages/login/login_page.dart';
import 'package:penseapp/features/products/packages/home/products_page.dart';
import 'package:penseapp/features/splash/packages/splash/cubit/splash_cubit.dart';
import 'package:penseapp/shared/consts/app_images.dart';
import 'package:penseapp/shared/widgets/background/auth_background_widget.dart';

class SplashPage extends HookWidget {
  static const String routeName = '/splash';

  @override
  Widget build(BuildContext context) {
    final state = useProvider(splashCubitProvider).state;

    WidgetsBinding.instance!.addPostFrameCallback((_) {
      if (state is SplashComplete) {
        if (state.session != null) {
          Navigator.pushReplacementNamed(context, ProductsPage.routeName,
              );
              //arguments: state.session
        } else {
          Navigator.pushReplacementNamed(context, LoginPage.routeName);
        }
      }
    });

    return Scaffold(
      body: AuthBackgroundWidget(
        child: Hero(
          tag: 'penseapp_logo',
          child: Image.asset(AppImages.authBackground, fit: BoxFit.cover),
        ),
      ),
    );
  }
}
