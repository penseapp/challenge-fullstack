import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:frontend/cubit/todos_cubit.dart';
import 'package:frontend/data/repository.dart';
import 'package:meta/meta.dart';

part 'add_todo_state.dart';

class AddTodoCubit extends Cubit<AddTodoState> {
  final Repository repository;
  final TodosCubit todosCubit;

  AddTodoCubit({this.repository, this.todosCubit}) : super(AddTodoInitial());

  void addTodo(String message) {
    if (message.isEmpty) {
      emit(AddTodoError(error: 'Todo message is empty'));
      return;
    }

    emit(AddingTodo());
    Timer(Duration(seconds: 2), () {
      repository.addTodo(message).then((todo) {
        if (todo != null) {
          todosCubit.addTodo(todo);
          emit(TodoAdded());
        }
      });
    });
  }
}
