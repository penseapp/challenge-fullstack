import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/features/auth/packages/login/bloc/login_bloc.dart';
import 'package:penseapp/features/auth/packages/signUp/sign_up_page.dart';
import 'package:penseapp/shared/consts/app_strings.dart';
import 'package:penseapp/shared/utils/validations.dart';
import 'package:penseapp/shared/widgets/background/auth_background_widget.dart';
import 'package:penseapp/shared/widgets/buttons/auth_button.dart';
import 'package:penseapp/shared/widgets/buttons/link_button.dart';
import 'package:penseapp/shared/widgets/text_field/custom_text_field.dart';
import 'package:penseapp/shared/utils/utils.dart';

class LoginPage extends StatefulHookWidget {
  static const String routeName = '/login';

  @override
  State<StatefulWidget> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final formKey = GlobalKey<FormState>();
  final emailTextEditingController = TextEditingController();
  final passwordTextEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final loginBloc = useProvider(loginBlocProvider);
    final state = loginBloc.state;

    WidgetsBinding.instance!
        .addPostFrameCallback((_) => showSnackbarByLoginState(context, state, loginBloc));

    return Scaffold(
      body: AuthBackgroundWidget(
        child: SafeArea(
          child: Stack(
            children: [
              SingleChildScrollView(
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: 50),
                  child: loginBody(context, loginBloc),
                ),
              ),
              Visibility(
                visible: loginBloc.state is LoginInProgress,
                child: Container(
                  color: Colors.black26,
                  height: double.infinity,
                  width: double.infinity,
                  child: Center(child: CircularProgressIndicator()),
                ),
              ),
            ],
          ),
        ),
      )
    );
  }

  Widget loginBody(BuildContext context, LoginBloc loginBloc) => Column(
        children: [
          SizedBox(height: context.hp(36)),
          loginForm(context),
          SizedBox(height: context.hp(6)),
          loginButton(context, loginBloc),
          SizedBox(height: context.hp(4)),
          LinkButton(
            function:  () => Navigator.pushReplacementNamed(context, SignUpPage.routeName),
            label: AppStrings.register
          ),
          SizedBox(height: context.hp(4)),
        ],
      );

  Widget loginForm(BuildContext context) {
    return Form(
      key: formKey,
      autovalidateMode: AutovalidateMode.disabled,
      child: Column(
        children: [
          CustomTextField(
            controller: emailTextEditingController,
            keyboardType: TextInputType.emailAddress,
            labelText: AppStrings.email,
            suffixIcon: Icon(Icons.email),
            validator: (value) => Validations.validateEmail(value, AppStrings.emailRequired),
          ),
          SizedBox(height: context.hp(3)),
          CustomTextField(
            keyboardType: TextInputType.visiblePassword,
            controller: passwordTextEditingController,
            labelText: AppStrings.password,
            obscureText: true,
            suffixIcon: Icon(Icons.password),
            validator: (value) => Validations.validatePassword(
              value,
               AppStrings.passwordRequired,
            ),
          ),
        ],
      ),
    );
  }

  Widget loginButton(BuildContext context, LoginBloc loginBloc) {
    return AuthButton(
      key: ValueKey('loginButton'),
      onPressed: () {
        if (formKey.currentState!.validate()) {
            loginBloc.add(UserSignInEvent(
              emailTextEditingController.text,
              passwordTextEditingController.text
            ));
          }
        },
      label: AppStrings.login,
    );
  }

  void showSnackbarByLoginState(BuildContext context, LoginState state, LoginBloc loginBloc) {
    SnackBar? snackBar;
    if (state is LoginSuccess) {
      //TODO: Go to HomePage
    } else if (state is LoginFail) {
      snackBar = SnackBar(
        content: Text(AppStrings.loginFail),
        key: ValueKey('loginFail'),
      );
    } else if (state is ConnectionFail) {
      snackBar = SnackBar(
        content: Text(AppStrings.connectionFail),
        key: ValueKey('connectionFail'),
      );
    }

    if (snackBar != null) {
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
      loginBloc.add(ResetLoginEvent());
    }
  }

  @override
  dispose() {
    emailTextEditingController.dispose();
    passwordTextEditingController.dispose();
    
    super.dispose();
  }
}