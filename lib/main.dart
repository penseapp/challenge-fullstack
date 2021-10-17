import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/features/auth/packages/login/login_page.dart';
import 'package:penseapp/shared/consts/app_consts.dart';
import 'package:penseapp/shared/routes/app_routes.dart';

Future<void> main() async {
  await Hive.initFlutter();
  await Hive.openBox(deviceStorageKey);
  
  runApp(const PenseApp());
}

class PenseApp extends StatelessWidget {
  const PenseApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ProviderScope(
      child: MaterialApp(
        title: 'PenseApp',
        debugShowCheckedModeBanner: false,
        initialRoute: LoginPage.routeName,
        routes: AppRoutes.routes,
      ),
    );
  }
}