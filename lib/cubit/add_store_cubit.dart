import 'package:bloc/bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/cubit/store_cubit.dart';
import 'package:frontend/services/repository.dart';
import 'package:meta/meta.dart';

part 'add_store_state.dart';

class AddStoreCubit extends Cubit<AddStoreState> {
  final Repository repository;
  final StoreCubit storeCubit;

  AddStoreCubit({this.repository, this.storeCubit}) : super(AddStoreInitial());

  void addStore(String name, String description) {
    print('AddStoreCubit.addStore => ' + name + ', ' + description);

    if (name.isEmpty || description.isEmpty) {
      emit(AddStoreError(error: 'Todo message is empty'));
      return;
    }

    emit(AddingStore());
    repository.addStore(name, description).then((store) {
      if (store != null) {
        print(
          'AddStoreCubit.addStore => ' +
              store.name.toString() +
              ', ' +
              store.description.toString(),
        );
        storeCubit.addStore(store);
        emit(StoreAdded());
      }
    });
  }
}
