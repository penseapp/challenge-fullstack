import 'package:bloc_riverpod/bloc_riverpod.dart';
import 'package:penseapp/features/auth/packages/login/usecases/get_token.dart';
import 'package:penseapp/features/session/models/session.dart';

part 'app_state.dart';

final appCubitProvider = BlocProvider(
  (ref) => AppCubit(
    getToken: ref.read(getTokenProvider),
  ),
);

class AppCubit extends Cubit<AppState> {
  AppCubit({
    required this.getToken,
  }) : super(AppStateInitial());

  final GetToken getToken;

  Future<void> initApp() async {

    final userToken = getToken().get() as String;
    final isUserLogged = userToken.isNotEmpty;

    Session? session;

    if (isUserLogged) session = Session.fromToken(userToken);


    emit(
      AppStateSuccess(session: session),
    );
  }
}
