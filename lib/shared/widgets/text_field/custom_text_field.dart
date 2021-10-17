import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

typedef ValidatorCallback = String? Function(String?);

class CustomTextField extends StatelessWidget {
  const CustomTextField({
    Key? key,
    this.controller,
    this.inputFormatters,
    this.keyboardType,
    this.helperText,
    this.hintText,
    this.labelText,
    this.suffixIcon,
    this.validator,
    this.obscureText = false,
  }) : super(key: key);

  final String? hintText;
  final String? helperText;
  final String? labelText;
  final Widget? suffixIcon;
  final TextEditingController? controller;
  final TextInputType? keyboardType;
  final List<TextInputFormatter>? inputFormatters;
  final ValidatorCallback? validator;
  final bool obscureText;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      inputFormatters: inputFormatters,
      keyboardType: keyboardType,
      obscureText: obscureText,

      decoration: InputDecoration(
        contentPadding: const EdgeInsets.only(bottom: 12),
        floatingLabelBehavior: FloatingLabelBehavior.always,
        helperText: helperText,
        hintText: hintText,
        labelText: labelText,
        suffixIcon: suffixIcon,
        labelStyle: TextStyle(
          fontSize: 28,
          color: Colors.black,
          fontWeight: FontWeight.w500,
          height: 0.7,
        ),
        helperStyle: TextStyle(
          fontSize: 14,
          color: Colors.black,
          fontWeight: FontWeight.w400,
        ),
        errorStyle: TextStyle(
          fontSize: 14,
          color: Colors.redAccent,
          fontWeight: FontWeight.w400,
        ),
      ),
      validator: validator,
    );
  }
}
