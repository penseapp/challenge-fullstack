import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:jwt_decoder/jwt_decoder.dart';

final sessionProvider = ScopedProvider<Session>(null);

class Session {
  Session(this.userId, this.expirationTime, this.token);

  factory Session.fromMap(Map<String, dynamic> tokenMap, String token) {
    return Session(
      tokenMap['sub'],
      DateTime.fromMillisecondsSinceEpoch(
        int.parse('${tokenMap['exp']}000'),
        isUtc: true,
      ),
      token,
    );
  }

  factory Session.fromToken(String token) =>
      Session.fromMap(JwtDecoder.decode(token), token);

  final String userId;
  final DateTime expirationTime;
  final String token;
}
