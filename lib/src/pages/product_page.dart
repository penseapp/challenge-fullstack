import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/cubit/product_cubit.dart';
import 'package:frontend/src/models/product.dart';
import 'package:frontend/utils/strings.dart';

class ProductScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    BlocProvider.of<ProductCubit>(context).fetchProduct();

    return Scaffold(
        appBar: AppBar(
          title: Text('Product Page'),
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
        body: BlocBuilder<ProductCubit, ProductState>(
          builder: (context, state) {
            if (!(state is ProductLoaded)) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }

            final products = (state as ProductLoaded).product;

            return SingleChildScrollView(
              child: Column(
                children: products.map((e) => _todo(e, context)).toList(),
              ),
            );
          },
        ));
  }

  Widget _todo(Product product, context) {
    return InkWell(
      onTap: () => {},
      child: Dismissible(
        key: Key('${product.id}'),
        child: _todoTitle(product, context),
        confirmDismiss: (_) async {
          BlocProvider.of<ProductCubit>(context);
          return false;
        },
        background: Container(
          color: Colors.indigo,
        ),
      ),
    );
  }
}

Widget _todoTitle(Product product, context) {
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
      children: [
        Text(product.name),
        Text(product.description),
        Text(product.price.toString()),
        Text(product.promotionalPrice.toString()),
        Text(product.statusFlag),
        Text(product.category),
      ],
    ),
  );
}
