import 'package:bloc/bloc.dart';
import 'package:bloc_riverpod/bloc_riverpod.dart';
import 'package:penseapp/features/auth/error/failures.dart';
import 'package:penseapp/features/auth/models/user_signin_model.dart';
import 'package:penseapp/features/auth/packages/login/usecases/login_with_email_and_password.dart';
import 'package:penseapp/features/auth/packages/login/usecases/save_token.dart';
import 'package:penseapp/features/session/models/session.dart';

part 'login_event.dart';
part 'login_state.dart';

final loginBlocProvider = BlocProvider.autoDispose(
  (ref) => LoginBloc(
    loginWithEmailAndPassword: ref.read(loginWithEmailAndPasswordProvider),
    saveToken: ref.read(saveTokenProvider),
  ),
);

class LoginBloc extends Bloc<LoginEvent, LoginState> {
  LoginBloc({
    required this.loginWithEmailAndPassword,
    required this.saveToken,
  }) : super(LoginInitial());

  final LoginWithEmailAndPassword loginWithEmailAndPassword;
  final SaveToken saveToken;

  @override
  Stream<LoginState> mapEventToState(LoginEvent event) async* {
    if (event is UserSignInEvent) {
      yield* mapUserSignedIn(event);
    } else if (event is ResetLoginEvent) {
      yield LoginInitial();
    }
  }

  Stream<LoginState> mapUserSignedIn(UserSignInEvent event) async* {
    final email = event.email;
    final password = event.password;

    yield LoginInProgress();

    final userModel = UserSignInModel(email: email, password: password);
    final result = await loginWithEmailAndPassword(userModel);

    yield result.when(
      (error) {
        if (error is LoginConnectionFailure) {
          return ConnectionFail();
        } else if (error is UserNotFoundFailure) {
          return LoginInvalid();
        }
        return LoginFail();
      },
      (token) {
        saveToken(token);
        final session = Session.fromToken(token);
        return LoginSuccess(session);
      },
    );
  }
}
