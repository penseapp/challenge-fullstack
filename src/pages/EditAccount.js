import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Platform, View, Image, Text, ScrollView } from 'react-native'
import { Button, Input, ImagePickerFunction } from '../components'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../contexts/auth'
import { useLoading } from '../contexts/loading'
import api, { STORAGE_URL } from '../services/api'

import { formatPhoneNumber } from '../utils'
import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function EditAccount() {
  const { user, signed } = useAuth()
  const { startLoading, stopLoading, loading } = useLoading()

  const navigation = useNavigation()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: 'default-avatar.png'
  })

  const updateUserInfo = async () => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    startLoading()

    const formData = new FormData()
    formData.append('name', userData.name)
    formData.append('phone', userData.phone)
    formData.append('file', userData.avatar)

    await api
      .put(`user/${user.id}`, formData, config)
      .then(res => {
        navigation.navigate('Minha conta', { updated: true })
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
      })
  }

  const onChange = (type, value) => setUserData({ ...userData, [type]: value })

  useEffect(() => {
    if (signed)
      setUserData(user)
  }, [signed])


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
              <ImagePickerFunction onChange={image => onChange('phone', image.name)}>
                <Image style={styles.avatar} source={{
                  uri: `${STORAGE_URL}/user/${userData.avatar}`
                }} />
              </ImagePickerFunction>
            </View>

            <View style={styles.profileData}>

              <View style={styles.profileField}>
                <Text style={styles.label}>Nome</Text>
                <Input
                  placeholder={'Ex: Pedro Henrique Santos'}
                  value={userData.name}
                  onChangeText={value => onChange('name', value)}
                />
              </View>

              <View style={styles.profileField}>
                <Text style={styles.label}>E-mail</Text>
                <Input
                  disabled
                  value={userData.email}
                />
              </View>

              <View style={styles.profileField}>
                <Text style={styles.label}>Celular</Text>
                <Input
                  placeholder={'(xx)xxxxx-xxxx'}
                  keyboardType={'phone-pad'}
                  value={formatPhoneNumber(userData.phone)}
                  onChangeText={value => onChange('phone', value)}
                />
              </View>
            </View>

            <Button
              disabled={loading}
              title={"Salvar"}
              onPress={() => { updateUserInfo() }}
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
