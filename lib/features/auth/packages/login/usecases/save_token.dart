import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:penseapp/features/auth/data/auth_repository.dart';
import 'package:penseapp/shared/error/failures.dart';

final saveTokenProvider =
    Provider((ref) => SaveToken(ref.read(authRepositoryProvider)));

class SaveToken {
  SaveToken(this.authRepository);

  final AuthRepository authRepository;

  Future<Result<Failure, String>> call(String token) async {
    await authRepository.saveUserToken(token);

    return Success('');
  }
}
