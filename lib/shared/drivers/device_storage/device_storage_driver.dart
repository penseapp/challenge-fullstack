// coverage:ignore-file

import 'dart:convert';

import 'package:hive/hive.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:penseapp/shared/consts/app_consts.dart';

abstract class DeviceStorageDriver {
  void saveObject(String key, Map<String, dynamic> object);

  Map<String, dynamic> getObject(String key);

  void saveString(String key, String value);

  T get<T>(String key);

  void delete(String key);

  bool containsKey(String key);
}

final hiveDriverProvider = Provider((ref) => HiveDriverImpl());

class HiveDriverImpl implements DeviceStorageDriver {
  HiveDriverImpl() {
    _initBox();
  }

  late final Box box;

  Future<void> _initBox() async {
    box = await Hive.openBox(deviceStorageKey);
  }

  @override
  Map<String, dynamic> getObject(String key) {
    final object = box.get(key);
    if (object != null) {
      return jsonDecode(object as String) as Map<String, dynamic>;
    } else {
      return {};
    }
  }

  @override
  void saveObject(String key, Map<String, dynamic> jsonObject) {
    box.put(key, jsonEncode(jsonObject));
  }

  @override
  void saveString(String key, String value) {
    box.put(key, value);
  }

  @override
  bool containsKey(String key) {
    return box.containsKey(key);
  }

  @override
  void delete(String key) {
    box.delete(key);
  }

  @override
  T get<T>(String key) {
    return box.get(key) as T;
  }
}
