// coverage:ignore-file

import 'dart:io';
import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/shared/drivers/http/http_response.dart';

abstract class HttpDriver {
  Future<HttpResponse> get({
    String subPath,
    Map<String, String>? headers,
  });
  Future<HttpResponse> post({
    String subPath,
    Object? body,
    Map<String, String>? headers,
  });
}

final dioDriverProvider = Provider((ref) => DioDriverImpl());

class DioDriverImpl implements HttpDriver {
  DioDriverImpl() {
    _dio = Dio();

    // Coverage: ignore-line
    _configHttpsCertificate();
  }

  final String serverUrl =
      Platform.isAndroid ? 'http://10.0.2.2:3333/' : 'http://127.0.0.1:3333/';

  late final Dio _dio;

  void _configHttpsCertificate() {
    (_dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
        (client) {
      client.badCertificateCallback =
          (X509Certificate cert, String host, int port) => true;
    };
  }

  @override
  Future<HttpResponse> get({
    String subPath = '',
    Map<String, String>? headers,
  }) async {
    final options =
        Options(contentType: Headers.jsonContentType, headers: headers);
    final finalUrl = subPath.isNotEmpty ? '$serverUrl$subPath' : serverUrl;
    final response = await _dio.get(finalUrl, options: options);

    return HttpResponse(response.data, response.statusCode);
  }

  @override
  Future<HttpResponse> post({
    String subPath = '',
    Object? body,
    Map<String, String>? headers,
  }) async {
    final finalUrl = subPath.isNotEmpty ? '$serverUrl$subPath' : serverUrl;
    final options =
        Options(contentType: Headers.jsonContentType, headers: headers);
    final response = await _dio.post(finalUrl, data: body, options: options);

    return HttpResponse(response.data, response.statusCode);
  }
}
