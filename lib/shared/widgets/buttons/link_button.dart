import 'package:flutter/material.dart';

class LinkButton extends StatelessWidget {
  const LinkButton(
      {Key? key, required this.function, required this.label})
      : super(key: key);

  final String label;
  final VoidCallback? function;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      key: ValueKey(label),
      onPressed: function,
      child: Text(
        label,
        softWrap: true,
        textAlign: TextAlign.center,
        style: TextStyle(
          fontSize: 22,

          color: Colors.blueAccent,
          fontWeight: FontWeight.w400,
          decoration: TextDecoration.underline
        ),
      ),
    );
  }
}
