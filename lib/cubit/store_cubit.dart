import 'package:bloc/bloc.dart';
import 'package:frontend/services/repository.dart';
import 'package:frontend/src/models/store.dart';
import 'package:meta/meta.dart';

part 'store_state.dart';

class StoreCubit extends Cubit<StoreState> {
  final Repository repository;

  StoreCubit({this.repository}) : super(StoreInitial());

  void fetchStore() {
    repository.fetchStore().then((store) {
      emit(StoreLoaded(store: store));
    });
  }

  void addStore(Store store) {
    print('StoreCubit.addStore => ' +
        store.name.toString() +
        ', ' +
        store.description.toString());
    final currentState = state;

    if (currentState is StoreLoaded) {
      final storeList = currentState.store;

      storeList.add(store);
      emit(StoreLoaded(store: storeList));
    }
  }
}
