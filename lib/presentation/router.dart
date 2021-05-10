import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/constants/strings.dart';
import 'package:frontend/cubit/add_todo_cubit.dart';
import 'package:frontend/cubit/edit_todo_cubit.dart';
import 'package:frontend/cubit/todos_cubit.dart';
import 'package:frontend/data/models/todo.dart';
import 'package:frontend/data/network_service.dart';
import 'package:frontend/data/repository.dart';
import 'package:frontend/presentation/screens/add_todo_screen.dart';
import 'package:frontend/presentation/screens/edit_todo_screen.dart';
import 'package:frontend/presentation/screens/todos_screen.dart';

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
