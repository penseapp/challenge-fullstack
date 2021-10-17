import 'dart:math' as math;
import 'package:flutter/material.dart';

extension Responsive on BuildContext {
  double wp(double percent) =>
      MediaQuery.of(this).size.width * percent / 100; //Width percentage
  double hp(double percent) =>
      MediaQuery.of(this).size.height * percent / 100; //Height percentage
  double ip(double percent) =>
      math.sqrt(math.pow(MediaQuery.of(this).size.width, 2) +
          math.pow(MediaQuery.of(this).size.height, 2)) *
      percent /
      100;
}
