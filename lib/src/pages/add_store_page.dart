import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/cubit/add_store_cubit.dart';
import 'package:toast/toast.dart';

class AddStorePage extends StatelessWidget {
  final _nameController = TextEditingController();
  final _descriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Store'),
      ),
      body: BlocListener<AddStoreCubit, AddStoreState>(
        listener: (context, state) {
          if (state is StoreAdded) {
            Navigator.pop(context);
          } else if (state is AddStoreError) {
            Toast.show(
              state.error,
              context,
              duration: 3,
              backgroundColor: Colors.red,
              gravity: Toast.CENTER,
            );
          }
        },
        child: Container(
          margin: EdgeInsets.all(20),
          child: _body(context),
        ),
      ),
    );
  }

  Widget _body(context) {
    return Column(
      children: [
        TextField(
          autofocus: true,
          controller: _nameController,
          decoration: InputDecoration(hintText: 'Adicione um nome'),
        ),
        TextField(
          controller: _descriptionController,
          decoration: InputDecoration(hintText: 'Adicione uma descrição'),
        ),
        SizedBox(height: 10),
        InkWell(
            onTap: () {
              final name = _nameController.text;
              final description = _descriptionController.text;

              print('AddStorePage.addStore => ' + name + ', ' + description);

              BlocProvider.of<AddStoreCubit>(context)
                  .addStore(name, description);
            },
            child: _addButton(context)),
      ],
    );
  }

  Widget _addButton(context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 50,
      decoration: BoxDecoration(
        color: Colors.indigo,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Center(
        child: BlocBuilder<AddStoreCubit, AddStoreState>(
          builder: (context, state) {
            if (state is AddingStore) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }

            return Text(
              'Add Store',
              style: TextStyle(
                color: Colors.white,
              ),
            );
          },
        ),
      ),
    );
  }
}
