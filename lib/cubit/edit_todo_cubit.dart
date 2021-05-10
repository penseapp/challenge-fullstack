import 'package:bloc/bloc.dart';
import 'package:frontend/cubit/todos_cubit.dart';
import 'package:frontend/data/models/todo.dart';
import 'package:frontend/data/repository.dart';
import 'package:meta/meta.dart';

part 'edit_todo_state.dart';

class EditTodoCubit extends Cubit<EditTodoState> {
  final Repository repository;
  final TodosCubit todosCubit;

  EditTodoCubit({this.repository, this.todosCubit}) : super(EditTodoInitial());

  void deleteTodo(Todo todo) {
    repository.deleteTodo(todo.id).then((isDeleted) {
      if (isDeleted) {
        todosCubit.deleteTodo(todo);
        emit(TodoEdited());
      }
    });
  }

  void updateTodo(Todo todo, String message) {
    if (message.isEmpty) {
      emit(EditTodoError(error: 'Message is empty'));
      return;
    }

    repository.updateTodo(message, todo.id).then((isEdited) {
      if (isEdited) {
        todo.todoMessage = message;
        todosCubit.updateTodoList();
        emit(TodoEdited());
      }
    });
  }
}
