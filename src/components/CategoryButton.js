import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function CategoryButton({
  title,
  active = false,
  ...rest
}) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>
        {title}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['light-secondary'],
    width: 95,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 8,
    marginTop: 12,
  },

  containerActive: {
    backgroundColor: colors['dark-blue']
  },

  text: {
    color: colors['light-blue'],
    fontFamily: fonts.text
  },

  textActive: {
    fontFamily: fonts.text,
    color: colors['light-secondary'],
  }
});
