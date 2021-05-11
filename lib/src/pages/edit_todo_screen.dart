import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/cubit/edit_todo_cubit.dart';
import 'package:frontend/src/models/todo.dart';
import 'package:toast/toast.dart';

class EditTodoScreen extends StatelessWidget {
  final Todo todo;
  final _controller = TextEditingController();

  EditTodoScreen({Key key, this.todo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    _controller.text = todo.todoMessage;

    return BlocListener<EditTodoCubit, EditTodoState>(
      listener: (context, state) {
        if (state is TodoEdited) {
          Navigator.pop(context);
        } else if (state is EditTodoError) {
          Toast.show(state.error, context,
              backgroundColor: Colors.red, duration: 3, gravity: Toast.CENTER);
        }
      },
      child: Scaffold(
          appBar: AppBar(
            title: Text('Edit todo'),
            actions: [
              InkWell(
                onTap: () {
                  BlocProvider.of<EditTodoCubit>(context).deleteTodo(todo);
                },
                child: Padding(
                  padding: const EdgeInsets.all(10),
                  child: Icon(Icons.delete),
                ),
              )
            ],
          ),
          body: _body(context)),
    );
  }

  Widget _body(context) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        children: [
          TextField(
            controller: _controller,
            autocorrect: true,
            decoration: InputDecoration(hintText: 'Enter todo message...'),
          ),
          SizedBox(
            height: 10,
          ),
          InkWell(
            onTap: () {
              BlocProvider.of<EditTodoCubit>(context)
                  .updateTodo(todo, _controller.text);
            },
            child: _updateButton(context),
          )
        ],
      ),
    );
  }

  Widget _updateButton(context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 50,
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Center(
        child: Text(
          'Update Todo',
          style: TextStyle(
            fontSize: 15,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
