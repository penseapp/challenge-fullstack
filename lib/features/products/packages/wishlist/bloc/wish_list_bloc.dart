import 'package:bloc/bloc.dart';
import 'package:bloc_riverpod/bloc_riverpod.dart';
import 'package:equatable/equatable.dart';
import 'package:penseapp/features/products/error/failures.dart';
import 'package:penseapp/features/products/models/product_model.dart';
import 'package:penseapp/features/products/packages/wishlist/usecases/save_wishlist.dart';

part 'wish_list_event.dart';
part 'wish_list_state.dart';

final wishListBlocProvider = BlocProvider.autoDispose(
  (ref) => WishListBloc(
    ref.read(saveWishListProvider),
  )
);

class WishListBloc extends Bloc<WishListEvent, WishListState> {
  WishListBloc(this.saveWishList) : super(WishListInitial());

  final SaveWishList saveWishList;
  final List<ProductModel> products = [];

  @override
  Stream<WishListState> mapEventToState(WishListEvent event) async* {
    if (event is AddProductToList) {
      products.add(event.product);
    } else if (event is SaveWishListToPdf) {
      final result = await saveWishList(products);

      yield result.when(
        (error) {
          if (error is SavingWishListConnectionFailure) {
            return WishListConnectionFail();
          } else if (error is SavingWishListFailure) {
            return WishListSaveFail();
          }

          return WishListSaveFail();
        },
        (list) {
          return WishListSaved();
        },
      );
    }
  }
}