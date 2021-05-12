import 'package:flutter/material.dart';
import 'package:frontend/pages/register/register_page.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(25),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ListTile(
                title: Text('E-mail'),
              ),
              TextField(
                autofocus: false,
                decoration: InputDecoration(hintText: 'fulano@exemplo.com.br'),
              ),
              ListTile(
                title: Text('Senha'),
              ),
              TextField(
                autofocus: false,
                decoration: InputDecoration(hintText: '************'),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: ElevatedButton(
                  onPressed: () => {},
                  child: Text('Entrar'),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 25),
                child: InkWell(
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => RegisterPage(),
                    ),
                  ),
                  child: Text('Preciso criar uma conta'),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
