import 'package:flutter/material.dart';
import 'package:frontend/pages/initial/initial_page.dart';
import 'package:frontend/pages/navigator/bottom_navigator_page.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/widgets.dart';

void main() async {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool _keepLogin;

  void initState() {
    super.initState();
    _loadKeepLogin();

    if (_keepLogin == null) {
      _keepLogin = false;
    }
  }

  _loadKeepLogin() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _keepLogin = (prefs.getBool('@store:keep_login') ?? 0);
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'HTTP',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: _keepLogin == true ? BottomNavigatorPage() : InitialPage(),
    );
  }
}
