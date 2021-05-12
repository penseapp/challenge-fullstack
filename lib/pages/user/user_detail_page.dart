import 'package:flutter/material.dart';
import 'package:frontend/controllers/user_controller.dart';
import '../../models/user.dart';

class UserDetailPage extends StatelessWidget {
  final UserController userController = UserController();
  final User user;

  UserDetailPage({@required this.user});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detalhes do(a) ' + user.name),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            children: <Widget>[
              Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    ListTile(
                      title: Text('Nome'),
                      subtitle: Text(user.name),
                    ),
                    ListTile(
                      title: Text('Email'),
                      subtitle: Text(user.email),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
