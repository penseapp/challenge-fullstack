import 'package:flutter/material.dart';
import 'package:frontend/controllers/user_controller.dart';

class UserAddPage extends StatelessWidget {
  final UserController userController = UserController();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cadastrar-se'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: <Widget>[
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                ListTile(
                  title: Text("Nome"),
                ),
                TextField(
                  autofocus: true,
                  controller: _nameController,
                  decoration: InputDecoration(hintText: 'Insira o seu nome'),
                ),
                ListTile(
                  title: Text("Email"),
                ),
                TextField(
                  controller: _emailController,
                  decoration:
                      InputDecoration(hintText: 'exemplo@exemplo.com.br'),
                ),
                ListTile(
                  title: Text("Senha"),
                ),
                TextField(
                  controller: _passwordController,
                  decoration: InputDecoration(hintText: '************'),
                ),
                ElevatedButton(
                  onPressed: () {
                    final _name = _nameController.text;
                    final _email = _emailController.text;
                    final _password = _passwordController.text;

                    userController.saveUser(_name, _email, _password, context);
                  },
                  child: Text('Cadastrar-se'),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
