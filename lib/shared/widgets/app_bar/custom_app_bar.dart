import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';


class CustomAppBar extends HookWidget implements PreferredSizeWidget {
  const CustomAppBar({
    required this.title,
    required this.icon,
    Key? key}) : super(key: key);

  final String title;
  final Widget? icon;

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight + 10);


  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(
        title,
        style: TextStyle(
          color: Colors.black,
        ),
      ),
      centerTitle: true,
      backgroundColor: Colors.purple,
      actions: [
        Padding(
          padding: const EdgeInsets.only(right: 5),
          child: icon,
        ),
      ],
    );
  }
}
