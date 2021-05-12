import 'package:flutter/material.dart';
import 'package:frontend/controllers/user_controller.dart';
import 'package:frontend/pages/user/user_add_page.dart';
import 'user_detail_page.dart';
import '../../models/user.dart';

class UserListPage extends StatefulWidget {
  @override
  _UserListPageState createState() => _UserListPageState();
}

class _UserListPageState extends State<UserListPage> {
  final UserController userController = UserController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => UserAddPage(),
            ),
          );
        },
        child: Icon(Icons.add),
      ),
      appBar: AppBar(
        title: Text('Usuários'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(25),
        child: FutureBuilder(
          future: userController.listUser(),
          builder: (BuildContext context, AsyncSnapshot<List<User>> snapshot) {
            if (snapshot.hasData) {
              List<User> user = snapshot.data;
              return ListView(
                children: user
                    .map(
                      (User user) => ListTile(
                        title: Text(user.name),
                        subtitle: Text(user.email),
                        onTap: () => Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => UserDetailPage(
                              user: user,
                            ),
                          ),
                        ),
                      ),
                    )
                    .toList(),
              );
            } else {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
          },
        ),
      ),
    );
  }
}
