import React from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/FontAwesome5'
import Button from './Button'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function Warning({ title, description, isBtnVisible = false, icon, ...rest }) {
  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView
      testID="empty-message"
      style={styles.emptyContainer}
    >
      <Icon name={icon} size={120} color={colors['dark-blue']} />

      <View>
        <Text style={styles.emptyTitle}>{title}</Text>
        <Text style={styles.emptyDescription}>{description}</Text>
      </View>

      { isBtnVisible && <Button
        title={"Tela inicial"}
        onPress={() => navigation.navigate('Home')}
      />}

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '25%'
  },

  emptyTitle: {
    color: colors['dark-blue'],
    fontSize: 26,
    fontFamily: fonts.text,
    textAlign: 'center'
  },

  emptyDescription: {
    color: colors.p,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15
  },

})
