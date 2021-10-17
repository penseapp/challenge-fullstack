import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:internet_connection_checker/internet_connection_checker.dart';

abstract class ConnectionCheckService {
  Future<bool> hasConnection();
}

// coverage:ignore-line
final connectivityProvider = Provider((ref) => Connectivity());

final connectionCheckServiceProvider = Provider((ref) =>
    ConnectionCheckServiceImpl(connectivity: ref.read(connectivityProvider)));

class ConnectionCheckServiceImpl implements ConnectionCheckService {
  ConnectionCheckServiceImpl({
    required this.connectivity,
  });

  final Connectivity connectivity;

  @override
  Future<bool> hasConnection() async {
    if (await connectivity.checkConnectivity() == ConnectivityResult.none) {
      return false;
    }

    return InternetConnectionChecker().hasConnection;
  }
}
