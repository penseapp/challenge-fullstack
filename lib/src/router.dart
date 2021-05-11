import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/cubit/add_store_cubit.dart';
import 'package:frontend/cubit/product_cubit.dart';
import 'package:frontend/cubit/store_cubit.dart';
import 'package:frontend/src/pages/add_store_page.dart';
import 'package:frontend/src/pages/store_page.dart';
import 'package:frontend/utils/strings.dart';
import 'package:frontend/services/network_service.dart';
import 'package:frontend/services/repository.dart';

class AppRouter {
  Repository repository;
  StoreCubit storeCubit;
  ProductCubit productCubit;

  AppRouter() {
    repository = Repository(networkService: NetworkService());
    storeCubit = StoreCubit(repository: repository);
    productCubit = ProductCubit(repository: repository);
  }

  Route generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(
          builder: (_) => BlocProvider.value(
            value: storeCubit,
            child: StorePage(),
          ),
        );

      /* case '/':
        return MaterialPageRoute(
          builder: (_) => BlocProvider.value(
            value: productCubit,
            child: ProductScreen(),
          ),
        ); */

      case ADD_STORE_ROUTE:
        return MaterialPageRoute(
          builder: (_) => BlocProvider(
            create: (BuildContext context) => AddStoreCubit(
              repository: repository,
              storeCubit: storeCubit,
            ),
            child: AddStorePage(),
          ),
        );

//----------------------------------------

      default:
        return null;
    }
  }
}
