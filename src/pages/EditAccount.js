import React from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Platform, View, Image, Text, ScrollView } from 'react-native'
import { Button, Input, ImagePickerFunction } from '../components'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

import avatar from '../assets/avatar.png'

export default function EditAccount() {
  const navigation = useNavigation()


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.goBack}
              onPress={() => navigation.goBack()}
            >
              <Icon name={'arrow-left'} size={20} color={colors.h1} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Editar Conta</Text>
          </View>

          <View style={styles.content}>

            <View style={styles.profileData}>
              <ImagePickerFunction onChange={image => console.log(image)}>
                <Image style={styles.avatar} source={avatar} />
              </ImagePickerFunction>
            </View>

            <View style={styles.profileData}>

              <View style={styles.profileField}>
                <Text style={styles.label}>Nome</Text>
                <Input
                  placeholder={'Ex: Pedro Henrique Santos'}
                />
              </View>

              <View style={styles.profileField}>
                <Text style={styles.label}>E-mail</Text>
                <Input
                  placeholder={'Ex: pedrosantos@gmail.com.br'}
                />
              </View>

              <View style={styles.profileField}>
                <Text style={styles.label}>Celular</Text>
                <Input
                  placeholder={'(xx)xxxxx-xxxx'}
                  keyboardType={'phone-pad'}
                />
              </View>
            </View>

            <Button
              title={"Salvar"}
            />

          </View>
        </ScrollView>
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

  goBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    left: 25
  },

  headerTitle: {
    fontSize: 25,
    fontFamily: fonts.text,
    color: colors.h1,
    opacity: 0.6,
    textAlign: 'center',
    alignSelf: 'center'
  },

  profileData: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 140,
    borderWidth: 2,
    borderColor: colors['dark-blue'],
    position: 'relative',
  },

  profileField: {
    alignItems: 'center',
  },

  label: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: colors['dark-blue'],
    alignSelf: 'flex-start',

    marginTop: 20,
    marginBottom: -12,
    marginLeft: 10,
  },

})
