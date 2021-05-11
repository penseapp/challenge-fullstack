import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/utils/strings.dart';
import 'package:frontend/cubit/add_todo_cubit.dart';
import 'package:frontend/cubit/edit_todo_cubit.dart';
import 'package:frontend/cubit/todos_cubit.dart';
import 'package:frontend/src/models/todo.dart';
import 'package:frontend/services/network_service.dart';
import 'package:frontend/services/repository.dart';
import 'package:frontend/src/pages/add_todo_screen.dart';
import 'package:frontend/src/pages/edit_todo_screen.dart';
import 'package:frontend/src/pages/todos_screen.dart';

class AppRouter {
  Repository repository;
  TodosCubit todosCubit;

  AppRouter() {
    repository = Repository(networkService: NetworkService());
    todosCubit = TodosCubit(repository: repository);
  }

  Route generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(
          builder: (_) => BlocProvider.value(
            value: todosCubit,
            child: TodosScreen(),
          ),
        );

      case EDIT_TODO_ROUTE:
        final todo = settings.arguments as Todo;
        return MaterialPageRoute(
          builder: (_) => BlocProvider(
            create: (BuildContext context) => EditTodoCubit(
              repository: repository,
              todosCubit: todosCubit,
            ),
            child: EditTodoScreen(
              todo: todo,
            ),
          ),
        );

      case ADD_TODO_ROUTE:
        return MaterialPageRoute(
          builder: (_) => BlocProvider(
            create: (BuildContext context) => AddTodoCubit(
              repository: repository,
              todosCubit: todosCubit,
            ),
            child: AddTodoScreen(),
          ),
        );

      default:
        return null;
    }
  }
}
