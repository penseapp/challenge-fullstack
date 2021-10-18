import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/features/splash/packages/splash/splash_page.dart';
import 'package:penseapp/shared/app/cubit/app_cubit.dart';
import 'package:penseapp/shared/routes/app_routes.dart';

class AppWidget extends StatefulHookWidget {
  @override
  _AppWidgetState createState() => _AppWidgetState();
}

class _AppWidgetState extends State<AppWidget> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance!.addPostFrameCallback((_) {
      context.read(appCubitProvider).initApp();
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PenseApp',
      debugShowCheckedModeBanner: false,
      initialRoute: SplashPage.routeName,
      routes: AppRoutes.routes,
    );
  }
}
