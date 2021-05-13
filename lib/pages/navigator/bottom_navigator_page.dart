import 'package:flutter/material.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import 'package:frontend/controllers/product_controller.dart';
import 'package:frontend/pages/features/others_features_page.dart';
import 'package:frontend/pages/login/login_page.dart';
import 'package:frontend/pages/product/product_add_page.dart';
import 'package:frontend/pages/product/product_list_page.dart';
import 'package:frontend/pages/wishlist/wish_list_page.dart';
import 'package:shared_preferences/shared_preferences.dart';

class BottomNavigatorPage extends StatefulWidget {
  @override
  _BottomNavigatorPageState createState() => _BottomNavigatorPageState();
}

class _BottomNavigatorPageState extends State<BottomNavigatorPage> {
  final ProductController productController = ProductController();
  List<String> _wishList;
  int _selectedIndex = 0;

  static List<Widget> _widgetOptions = <Widget>[
    ProductListPage(),
    ProductAddPage(),
    WishListPage(),
    OtherFeaturesPage()
  ];

  void initState() {
    super.initState();
    productController.listProduct();

    _loadWishList();

    if (_wishList == null) {
      _wishList = [];
    }
  }

  _removeKeepLogin() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      prefs.remove('@store:keep_login');
    });
  }

  void _logout() {
    _removeKeepLogin();

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => LoginPage(),
      ),
    );
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
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
      floatingActionButton: SpeedDial(
        animatedIcon: AnimatedIcons.menu_close,
        animatedIconTheme: IconThemeData(size: 28.0),
        backgroundColor: Colors.blue[700],
        visible: true,
        curve: Curves.bounceInOut,
        children: [
/*           SpeedDialChild(
            child: Icon(Icons.filter_alt_outlined, color: Colors.white),
            backgroundColor: Colors.blue,
            onTap: () => print('Pressed Write'),
            label: 'Filtros',
            labelStyle:
                TextStyle(fontWeight: FontWeight.w500, color: Colors.white),
            labelBackgroundColor: Colors.black,
          ), */
          SpeedDialChild(
            child: Icon(Icons.logout, color: Colors.white),
            backgroundColor: Colors.red,
            onTap: () {
              _logout();

              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => LoginPage(),
                ),
              );
            },
            label: 'Sair',
            labelStyle:
                TextStyle(fontWeight: FontWeight.w500, color: Colors.white),
            labelBackgroundColor: Colors.black,
          ),
        ],
      ),
      body: _widgetOptions.elementAt(_selectedIndex),
      bottomNavigationBar: BottomNavigationBar(
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.local_grocery_store_outlined),
            label: 'Produtos',
            backgroundColor: Colors.grey[900],
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.add_box_rounded),
            label: 'Cadastrar produto',
            backgroundColor: Colors.grey[900],
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.wallet_giftcard_rounded),
            label: 'Lista de desejos',
            backgroundColor: Colors.grey[850],
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.list_alt),
            label: 'Outras features',
            backgroundColor: Colors.grey[900],
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.blue,
        onTap: _onItemTapped,
      ),
    );
  }
}
