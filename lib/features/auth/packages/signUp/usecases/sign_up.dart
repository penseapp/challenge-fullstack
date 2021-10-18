import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:penseapp/features/auth/data/auth_repository.dart';
import 'package:penseapp/features/auth/error/failures.dart';
import 'package:penseapp/features/auth/models/user_signup_model.dart';
import 'package:penseapp/shared/error/failures.dart';
import 'package:penseapp/shared/services/connection/connection_check_service.dart';

final signUpProvider = Provider((ref) => SignUp(
    authRepository: ref.read(authRepositoryProvider),
    connectionCheckService: ref.read(connectionCheckServiceProvider)));

class SignUp {
  SignUp({required this.authRepository, required this.connectionCheckService});

  final AuthRepository authRepository;
  final ConnectionCheckService connectionCheckService;

  Future<Result<Failure, bool>> call(UserSignUpModel userSignUpModel) async {
    if (await connectionCheckService.hasConnection()) {
      final name = userSignUpModel.name;
      final email = userSignUpModel.email;
      final password = userSignUpModel.password;

      if (email.isEmpty || password.isEmpty || name.isEmpty) {
        return Error(UserNotFoundFailure());
      }

      return authRepository.signUp(userSignUpModel);
    } else {
      return Error(SignUpConnectionFailure());
    }
  }
}
