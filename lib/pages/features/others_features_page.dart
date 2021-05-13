import 'package:flutter/material.dart';
import 'package:frontend/pages/login/login_page.dart';
import 'package:frontend/pages/register/register_page.dart';
import 'package:frontend/pages/store/store_add_page.dart';
import 'package:frontend/pages/store/store_list_page.dart';
import 'package:frontend/pages/user/user_add_page.dart';
import 'package:frontend/pages/user/user_list_page.dart';

class OtherFeaturesPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(25),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                style: ElevatedButton.styleFrom(primary: Colors.black),
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => StoreListPage(),
                  ),
                ),
                child: Text('Listar as Lojas'),
              ),
              ElevatedButton(
                style: ElevatedButton.styleFrom(primary: Colors.black),
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => StoreAddPage(),
                  ),
                ),
                child: Text('Cadastrar uma loja'),
              ),
              ElevatedButton(
                style: ElevatedButton.styleFrom(primary: Colors.black),
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => UserListPage(),
                  ),
                ),
                child: Text('Listar os usuários'),
              ),
              ElevatedButton(
                style: ElevatedButton.styleFrom(primary: Colors.black),
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => UserAddPage(),
                  ),
                ),
                child: Text('Cadastrar os usuários'),
              ),
              ElevatedButton(
                style: ElevatedButton.styleFrom(primary: Colors.orange[800]),
                onPressed: () => {},
                child: Text(
                    'Clicando nos itens de qualquer listagem, entrá nos detalhes'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
