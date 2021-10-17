import 'package:bloc/bloc.dart';
import 'package:bloc_riverpod/bloc_riverpod.dart';
import 'package:penseapp/features/auth/error/failures.dart';
import 'package:penseapp/features/auth/models/user_signup_model.dart';
import 'package:penseapp/features/auth/packages/signUp/usecases/sign_up.dart';

part 'signup_event.dart';
part 'signup_state.dart';

final signUpBlocProvider = BlocProvider.autoDispose(
  (ref) => SignUpBloc(
    ref.read(signUpProvider),
  ),
);

class SignUpBloc extends Bloc<SignUpEvent, SignUpState> {
  SignUpBloc(this.signUp) : super(SignUpInitial());

  final SignUp signUp;

  @override
  Stream<SignUpState> mapEventToState(SignUpEvent event) async* {
    if (event is UserSignUpEvent) {
      yield* mapUserSignedIn(event);
    } 
    else if (event is ResetSignUpEvent) {
      yield SignUpInitial();
    }
  }

  Stream<SignUpState> mapUserSignedIn(UserSignUpEvent event) async* {
    final name = event.name;
    final email = event.email;
    final password = event.password;

    yield SignUpInProgress();

    final userModel = UserSignUpModel(name: name, email: email, password: password);
    final result = await signUp(userModel);

    yield result.when(
      (error) {
        if (error is SignUpConnectionFailure) {
          return SignUpConnectionFail();
        } else if (error is CantRegisterUserFailure) {
          return SignUpFail();
        }

        return SignUpFail();
      },
      (success) {
        return SignUpSuccess();
      },
    );
  }
}
