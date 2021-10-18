import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:penseapp/features/auth/data/auth_repository.dart';
import 'package:penseapp/features/auth/error/failures.dart';
import 'package:penseapp/features/auth/models/user_signin_model.dart';
import 'package:penseapp/shared/error/failures.dart';
import 'package:penseapp/shared/services/connection/connection_check_service.dart';

final loginWithEmailAndPasswordProvider = Provider((ref) =>
    LoginWithEmailAndPassword(
        authRepository: ref.read(authRepositoryProvider),
        connectionCheckService: ref.read(connectionCheckServiceProvider)));

class LoginWithEmailAndPassword {
  LoginWithEmailAndPassword(
      {required this.authRepository, required this.connectionCheckService});

  final AuthRepository authRepository;
  final ConnectionCheckService connectionCheckService;

  Future<Result<Failure, String>> call(UserSignInModel userSignInModel) async {
    if (await connectionCheckService.hasConnection()) {
      final email = userSignInModel.email;
      final password = userSignInModel.password;

      if (email.isEmpty || password.isEmpty) {
        return Error(UserNotFoundFailure());
      }

      return authRepository.signIn(userSignInModel);
    } else {
      return Error(LoginConnectionFailure());
    }
  }
}
