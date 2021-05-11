class Product {
  int id;
  String name;
  String description;
  int price;
  int promotionalPrice;
  String statusFlag;
  String category;

  Product.fromJson(Map json)
      : id = json["id"] as int,
        name = json["name"],
        description = json["description"],
        price = json["price"] as int,
        promotionalPrice = json["promotional_price"] as int,
        statusFlag = json["status_flag"],
        category = json["category"];
}
