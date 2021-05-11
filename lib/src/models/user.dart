class User {
  int id;
  String name;
  String token;
  String email;
  String password;

  User.fromJson(Map json)
      : id = json["id"] as int,
        name = json["name"],
        token = json["token"],
        email = json["email"],
        password = json["password"];
}
