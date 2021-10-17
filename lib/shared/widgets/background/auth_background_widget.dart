import 'package:flutter/material.dart';
import 'package:penseapp/shared/consts/app_images.dart';

class AuthBackgroundWidget extends StatelessWidget {
  const AuthBackgroundWidget({Key? key, this.child}) : super(key: key);

  final Widget? child;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      decoration: BoxDecoration(
        image: DecorationImage(
          colorFilter: ColorFilter.mode(Colors.black.withOpacity(0.15), BlendMode.dstATop),
          image: ExactAssetImage(
            AppImages.authBackground,
          ),
          fit: BoxFit.cover,
          alignment: Alignment.topCenter,
        ),
      ),
      child: child,
    );
  }
}
