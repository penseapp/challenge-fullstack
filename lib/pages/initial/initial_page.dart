import 'package:flutter/material.dart';

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
                onPressed: () => {},
                child: Text('Já tenho cadastro'),
              ),
              ElevatedButton(
                onPressed: () => {},
                child: Text('Quero criar uma conta'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
