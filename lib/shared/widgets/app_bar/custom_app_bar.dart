import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';


class CustomAppBar extends HookWidget implements PreferredSizeWidget {
  const CustomAppBar({required this.title, Key? key}) : super(key: key);

  final String title;

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
      // leading: IconButton(
      //   onPressed: () {},
      //   icon: Icon(
      //     Icons.menu,
      //     size: 30,
      //     color: Colors.black,
      //   ),
      //   tooltip: 'menu',
      // ),
      backgroundColor: Colors.purple,
      actions: [
        Padding(
          padding: const EdgeInsets.only(right: 5),
          child: IconButton(
            //TODO: Redirect for wishlist page
            onPressed: () {},
            icon: Icon(
              Icons.shopping_bag,
              size: 30,
              color: Colors.black,
            ),
            tooltip: 'wishlist',
          ),
        ),
      ],
    );
  }
}
