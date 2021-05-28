import React from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Platform, View, Image, Text } from 'react-native'
import { Button } from '../components'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/FontAwesome5'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

import avatar from '../assets/avatar.png'

export default function Account() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Minha Conta</Text>

          <TouchableOpacity
              style={styles.goBack}
              onPress={() => navigation.navigate("EditAccount")}
            >
              <Icon name={'user-edit'} size={22} color={colors['dark-blue']} />
            </TouchableOpacity>
        </View>

        <View style={styles.content}>

          <View style={styles.profileData}>
            <Image style={styles.avatar} source={avatar} />
            <Text style={styles.name}>Pedro Santos</Text>
          </View>

          <View style={styles.profileData}>
            <View style={styles.profileField}>
              <Text style={styles.label}>E-mail</Text>
              <Text style={styles.data}>PedroSantos@gmail.com.br</Text>
            </View>

            <View style={styles.profileField}>
              <Text style={styles.label}>Celular</Text>
              <Text style={styles.data}>(35) 9998-7766</Text>
            </View>
          </View>

          <Button
            title={"Sair"}
            logout={true}
          />

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35,
    width: "100%",
  },

  headerTitle: {
    fontSize: 25,
    fontFamily: fonts.text,
    color: colors.h1,
    opacity: 0.6,
    textAlign: 'center',
    alignSelf: 'center'
  },

  goBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    right: 25
  },

  profileData: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 2,
    borderBottomColor: colors['h2'],
    // paddingVertical: 12,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 140,
    borderWidth: 2,
    borderColor: colors['dark-blue'],
  },

  name: {
    marginVertical: 15,
    fontSize: 28,
    fontFamily: fonts.text,
    color: colors['dark-blue'],
    alignSelf: 'center'
  },

  profileField: {
    alignItems: 'center',
  },

  label: {
    fontSize: 22,
    fontFamily: fonts.text,
    color: colors['dark-blue'],
    alignSelf: 'center'
  },

  data: {
    marginBottom: 18,
    lineHeight: 24,
    fontSize: 16,
    color: colors.h1,
    alignSelf: 'center'
  },

})
