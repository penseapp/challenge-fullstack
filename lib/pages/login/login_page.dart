import 'package:flutter/material.dart';
import 'package:frontend/controllers/auth_controller.dart';
import 'package:frontend/pages/navigator/bottom_navigator_page.dart';
import 'package:frontend/pages/product/product_list_page.dart';
import 'package:frontend/pages/register/register_page.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final AuthController authController = AuthController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _keepLogin;
  String _token;

  void initState() {
    super.initState();
    _loadToken();
    _loadKeepLogin();

    if (_keepLogin == null) {
      _keepLogin = false;
    }
  }

  _loadKeepLogin() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _keepLogin = (prefs.getBool('@store:keep_login') ?? 0);
    });
  }

  _loadToken() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _token = (prefs.getString('@store:user_token') ?? 0);
    });
  }

  _saveKeepLogin(bool option) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      prefs.setBool('@store:keep_login', option);
    });
  }

  _saveToken(dynamic token) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      prefs.setString('@store:user_token', token);
    });
  }

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
                controller: _emailController,
                autofocus: false,
                decoration: InputDecoration(hintText: 'fulano@exemplo.com.br'),
              ),
              ListTile(
                title: Text('Senha'),
              ),
              TextField(
                controller: _passwordController,
                obscureText: true,
                autofocus: false,
                decoration: InputDecoration(hintText: '************'),
              ),
              CheckboxListTile(
                activeColor: Colors.black,
                checkColor: Colors.blue[100],
                title: Text("Lembrar minhas credenciais"),
                value: _keepLogin,
                onChanged: (newValue) {
                  setState(() {
                    print(newValue);
                    _saveKeepLogin(newValue);
                    _keepLogin = newValue;
                  });
                },
                controlAffinity: ListTileControlAffinity.leading,
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    primary: Colors.black,
                  ),
                  onPressed: () {
                    final _email = _emailController.text;
                    final _password = _passwordController.text;

                    authController.login(_email, _password).then((access) {
                      if (access) {
                        authController
                            .getLoginToken(_email, _password)
                            .then((token) {
                          _saveToken(token);
                        });

                        Navigator.pop(context);

                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => BottomNavigatorPage(),
                          ),
                        );
                      } else {
                        print('E-mail e/ou senha incorretos');
                      }
                    });
                  },
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
