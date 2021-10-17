// coverage:ignore-file

import 'package:equatable/equatable.dart';

class HttpResponse extends Equatable {
  HttpResponse(this.data, this.statusCode);

  final dynamic data;
  final int? statusCode;

  @override
  List<Object?> get props => [data, statusCode];
}
