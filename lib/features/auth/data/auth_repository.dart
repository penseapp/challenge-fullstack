import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:multiple_result/multiple_result.dart';
import 'package:penseapp/features/auth/error/failures.dart';
import 'package:penseapp/features/auth/models/user_signin_model.dart';
import 'package:penseapp/features/auth/models/user_signup_model.dart';
import 'package:penseapp/shared/consts/app_consts.dart';
import 'package:penseapp/shared/drivers/device_storage/device_storage_driver.dart';
import 'package:penseapp/shared/drivers/http/http_driver.dart';
import 'package:penseapp/shared/error/failures.dart';

final authRepositoryProvider = Provider(
  (ref) => AuthRepository(
    httpDriver: ref.read(dioDriverProvider),
    deviceStorageDriver: ref.read(hiveDriverProvider),
  ),
);

class AuthRepository {
  AuthRepository({required this.httpDriver, required this.deviceStorageDriver});

  final HttpDriver httpDriver;
  final DeviceStorageDriver deviceStorageDriver;

  Future<Result<Failure, String>> signIn(
      UserSignInModel userSignInModel) async {
    try {
      final response = await httpDriver.post(
        subPath: 'sessions',
        body: userSignInModel.toJson(),
      );

      if (response.statusCode == 200) {
        return Success(response.data['accessToken'] as String);
      }

      return Error(UserNotFoundFailure());
    } catch (e) {
      return Error(ServerFailure());
    }
  }

  void signOut() {
    deviceStorageDriver.delete(userTokenKey);
  }

  Future<Result<Failure, bool>> signUp(
      UserSignUpModel userSignUpModel) async {
    try {
      final response = await httpDriver.post(
        subPath: 'users',
        body: userSignUpModel.toJson(),
      );

      if (response.statusCode == 200) {
        return Success(true);
      }

      return Error(CantRegisterUserFailure());
    } catch (e) {
      return Error(ServerFailure());
    }
  }

  Future<void> saveUserToken(String token) async {
    deviceStorageDriver.saveString(userTokenKey, token);
  }

  String getUserToken() {
    return deviceStorageDriver.get(userTokenKey) as String? ?? '';
  }
}
