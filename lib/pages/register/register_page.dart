import 'package:flutter/material.dart';
import 'package:frontend/controllers/auth_controller.dart';
import 'package:frontend/pages/login/login_page.dart';

class RegisterPage extends StatelessWidget {
  final AuthController authController = AuthController();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(25),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              ListTile(
                title: Text('Nome'),
              ),
              TextField(
                autofocus: false,
                controller: _nameController,
                decoration: InputDecoration(hintText: 'Insira o seu nome'),
              ),
              ListTile(
                title: Text('E-mail'),
              ),
              TextField(
                autofocus: false,
                controller: _emailController,
                decoration: InputDecoration(hintText: 'exemplo@exemplo.com.br'),
              ),
              ListTile(
                title: Text('Senha'),
              ),
              TextField(
                autofocus: false,
                controller: _passwordController,
                decoration: InputDecoration(hintText: '************'),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: ElevatedButton(
                  onPressed: () {
                    final _name = _nameController.text;
                    final _email = _emailController.text;
                    final _password = _passwordController.text;

                    authController.userNewAcount(
                        _name, _email, _password, context);
                  },
                  child: Text('Cadastrar-se'),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 25),
                child: InkWell(
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => LoginPage(),
                    ),
                  ),
                  child: Text('Já tenho uma conta.'),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
