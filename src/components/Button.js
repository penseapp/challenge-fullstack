import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function Button({ title, logout = false, ...rest }) {
  return (
    <TouchableOpacity
      style={[styles.container, {
        backgroundColor: logout ? colors.danger : colors['light-blue'],
      }]}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>

  )
};

const styles = StyleSheet.create({
  container: {
    height: 46,
    minWidth: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.text,
    color: colors['light-primary'],
  }
});
