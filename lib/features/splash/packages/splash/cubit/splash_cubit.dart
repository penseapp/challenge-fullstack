import 'dart:async';

import 'package:bloc_riverpod/bloc_riverpod.dart';
import 'package:penseapp/features/session/models/session.dart';
import 'package:penseapp/shared/app/cubit/app_cubit.dart';

part 'splash_state.dart';

const Duration splashDuration = Duration(seconds: 3);

final splashCubitProvider = BlocProvider.autoDispose((ref) =>
    SplashCubit(ref.read(appCubitProvider)));

class SplashCubit extends Cubit<SplashState> {
  SplashCubit(this.appCubit) : super(SplashInitial()){
    appCubit.stream.listen((event) async {

      await Future.delayed(splashDuration);
      
      emit(SplashComplete(
          (event as AppStateSuccess).session));
    });
  }

  final AppCubit appCubit;
}
