class Validations {
  static String? validateEmail(String? email, String invalidText) {
    if (email == null || !_emailValidate(email)) {
      return invalidText;
    }
    return null;
  }

  static bool _emailValidate(String email) {
    bool emailValid = RegExp(
            r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
        .hasMatch(email);
    return email.isNotEmpty && emailValid;
  }

  static String? validatePassword(String? password, String invalidText) {
    if (password == null || password.isEmpty) {
      return invalidText;
    }
    return null;
  }

  static String? validateName(String? name, String invalidText) {
    if (name == null || name.isEmpty) {
      return invalidText;
    }
    return null;
  }
}
