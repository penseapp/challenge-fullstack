import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/features/auth/packages/login/bloc/login_bloc.dart';
import 'package:penseapp/features/auth/packages/login/login_page.dart';
import 'package:penseapp/shared/consts/app_strings.dart';
import 'package:penseapp/shared/utils/validations.dart';
import 'package:penseapp/shared/widgets/background/auth_background_widget.dart';
import 'package:penseapp/shared/widgets/buttons/auth_button.dart';
import 'package:penseapp/shared/widgets/buttons/link_button.dart';
import 'package:penseapp/shared/widgets/text_field/custom_text_field.dart';
import 'package:penseapp/shared/utils/utils.dart';

class SignUpPage extends HookWidget {
  static const String routeName = '/signUp';

  final formKey = GlobalKey<FormState>();
  final nameTextEditingController = TextEditingController();
  final emailTextEditingController = TextEditingController();
  final passwordTextEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final loginBloc = useProvider(loginBlocProvider);
    final state = loginBloc.state;

    WidgetsBinding.instance!.addPostFrameCallback(
        (_) => showSnackbarByLoginState(context, state, loginBloc));

    return Scaffold(
        body: AuthBackgroundWidget(
      child: SafeArea(
        child: Stack(
          children: [
            SingleChildScrollView(
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: 50),
                child: signUpBody(context, loginBloc),
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
    ));
  }

  Widget signUpBody(BuildContext context, LoginBloc loginBloc) => Column(
        children: [
          SizedBox(height: context.hp(25)),
          signUpForm(context),
          SizedBox(height: context.hp(6)),
          signUpButton(context, loginBloc),
          SizedBox(height: context.hp(4)),
          LinkButton(
              function: () => Navigator.pushNamed(context, LoginPage.routeName),
              label: AppStrings.backtoLogin),
          SizedBox(height: context.hp(4)),
        ],
      );

  Widget signUpForm(BuildContext context) {
    return Form(
      key: formKey,
      autovalidateMode: AutovalidateMode.disabled,
      child: Column(
        children: [
          CustomTextField(
            controller: nameTextEditingController,
            labelText: AppStrings.name,
            keyboardType: TextInputType.name,
            suffixIcon: Icon(Icons.person),
            validator: (value) =>
                Validations.validateName(value, AppStrings.nameRequired),
          ),
          SizedBox(height: context.hp(4)),
          CustomTextField(
            controller: emailTextEditingController,
            suffixIcon: Icon(Icons.email),
            keyboardType: TextInputType.emailAddress,
            labelText: AppStrings.email,
            validator: (value) =>
                Validations.validateEmail(value, AppStrings.emailRequired),
          ),
          SizedBox(height: context.hp(4)),
          CustomTextField(
            controller: passwordTextEditingController,
            labelText: AppStrings.password,
            obscureText: true,
            suffixIcon: Icon(Icons.password),
            keyboardType: TextInputType.visiblePassword,
            validator: (value) => Validations.validatePassword(
              value,
              AppStrings.passwordRequired,
            ),
          ),
        ],
      ),
    );
  }

  Widget signUpButton(BuildContext context, LoginBloc loginBloc) {
    return AuthButton(
      key: ValueKey('signUpButton'),
      onPressed: () {
        if (formKey.currentState!.validate()) {
          // loginBloc.add(UserSignInEvent(emailTextEditingController.text,
          //     passwordTextEditingController.text));
        }
      },
      label: AppStrings.signUp,
    );
  }

  void showSnackbarByLoginState(
      BuildContext context, LoginState state, LoginBloc loginBloc) {
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
}
