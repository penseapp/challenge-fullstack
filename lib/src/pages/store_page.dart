import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/cubit/store_cubit.dart';
import 'package:frontend/src/models/store.dart';
import 'package:frontend/utils/strings.dart';

class StorePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    BlocProvider.of<StoreCubit>(context).fetchStore();

    return Scaffold(
        appBar: AppBar(
          title: Text('Store'),
          actions: [
            InkWell(
              onTap: () => Navigator.pushNamed(context, ADD_STORE_ROUTE),
              child: Padding(
                padding: EdgeInsets.all(10),
                child: Icon(Icons.add),
              ),
            )
          ],
        ),
        body: BlocBuilder<StoreCubit, StoreState>(
          builder: (context, state) {
            if (!(state is StoreLoaded)) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }

            final stores = (state as StoreLoaded).store;

            return SingleChildScrollView(
              child: Column(
                children: stores.map((e) => _todo(e, context)).toList(),
              ),
            );
          },
        ));
  }

  Widget _todo(Store store, context) {
    return InkWell(
      onTap: () => {},
      child: Dismissible(
        key: Key('${store.id}'),
        child: _todoTitle(store, context),
        confirmDismiss: (_) async {
          BlocProvider.of<StoreCubit>(context);
          return false;
        },
        background: Container(
          color: Colors.indigo,
        ),
      ),
    );
  }
}

Widget _todoTitle(Store store, context) {
  return Container(
    width: MediaQuery.of(context).size.width,
    padding: EdgeInsets.symmetric(horizontal: 15, vertical: 20),
    decoration: BoxDecoration(
      color: Colors.white,
      border: Border(
        bottom: BorderSide(
          color: Colors.grey[200],
        ),
      ),
    ),
    child: Column(
      children: [Text(store.name), Text(store.description)],
    ),
  );
}
