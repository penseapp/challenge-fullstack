import 'package:flutter/material.dart';
import 'package:frontend/pages/login/login_page.dart';
import 'package:frontend/pages/register/register_page.dart';

class InitialPage extends StatelessWidget {
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
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => LoginPage(),
                  ),
                ),
                child: Text('Já tenho cadastro'),
              ),
              ElevatedButton(
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => RegisterPage(),
                  ),
                ),
                child: Text('Quero criar uma conta'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
