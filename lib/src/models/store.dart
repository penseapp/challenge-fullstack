class Store {
  int id;
  String name;
  String description;

  Store.fromJson(Map json)
      : id = json["id"] as int,
        name = json["name"],
        description = json["description"];
}
