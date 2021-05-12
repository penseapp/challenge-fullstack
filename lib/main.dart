import 'package:flutter/material.dart';
import 'package:frontend/pages/login/login_page.dart';
import 'package:frontend/pages/register/register_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'HTTP',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: RegisterPage(),
    );
  }
}

/* import 'package:flutter/material.dart';

void main() {
  runApp(new MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Generated App',
      theme: new ThemeData(
        primarySwatch: Colors.teal,
        primaryColor: const Color(0xFF009688),
        accentColor: const Color(0xFF009688),
        canvasColor: const Color(0xFFfafafa),
      ),
      home: new MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);
  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('App Name'),
      ),
      body: new GridView.extent(
          maxCrossAxisExtent: 150.0,
          mainAxisSpacing: 4.0,
          crossAxisSpacing: 4.0,
          padding: const EdgeInsets.all(0.0),
          children: <Widget>[
            new TextField(
              style: new TextStyle(
                  fontSize: 0.0,
                  color: const Color(0xFFffa4a4),
                  fontWeight: FontWeight.w100,
                  fontFamily: "Merriweather"),
            )
          ]),
      bottomNavigationBar: new BottomNavigationBar(items: [
        new BottomNavigationBarItem(
          icon: const Icon(Icons.favorite),
          title: new Text('Desejos'),
        ),
        new BottomNavigationBarItem(
          icon: const Icon(Icons.account_balance_wallet),
          title: new Text('Produtos'),
        ),
        new BottomNavigationBarItem(
          icon: const Icon(Icons.assignment_ind),
          title: new Text('Perfil'),
        )
      ]),
    );
  }
}
 */
