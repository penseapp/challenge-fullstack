import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:penseapp/features/auth/data/auth_repository.dart';
import 'package:penseapp/shared/error/failures.dart';

final getTokenProvider =
    Provider((ref) => GetToken(ref.read(authRepositoryProvider)));

class GetToken {
  GetToken(this.authRepository);
  final AuthRepository authRepository;

  Result<Failure, String> call() {
    return Success(authRepository.getUserToken());
  }
}
