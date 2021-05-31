import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Platform, View, Image, Text } from 'react-native'
import { Button } from '../components'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useAuth } from '../contexts/auth'
import { useLoading } from '../contexts/loading'
import api, { STORAGE_URL } from '../services/api'
import { formatPhoneNumber } from '../utils'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function Account() {
  const { signOut, user, updateUserData, signed } = useAuth()
  const { startLoading, stopLoading, loading } = useLoading()
  const route = useRoute()
  const { updated } = route.params

  const navigation = useNavigation()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: 'default-avatar.png'
  })

  const getUser = async () => {
    startLoading()
    await api
      .get(`user/${user.id}`)
      .then(res => {
        setUserData({
          ...res.data[0],
        })
        updateUserData(res.data[0])
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
      })
  }

  useEffect(() => {
    if (signed)
      getUser()
  }, [signed])

  useEffect(() => {
    if (updated)
      getUser()
  }, [updated])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => getUser()} >
            <Text style={styles.headerTitle}>Minha Conta</Text>
          </TouchableOpacity>

          {!loading && <TouchableOpacity
            style={styles.goBack}
            onPress={() => navigation.navigate("EditAccount")}
          >
            <Icon name={'user-edit'} size={22} color={colors['dark-blue']} />
          </TouchableOpacity>
          }
        </View>

        {!loading &&
          <View style={styles.content}>

            <View style={styles.profileData}>
              <Image style={styles.avatar} source={{
                uri: `${STORAGE_URL}/user/${userData.avatar}`
              }} />
              <Text style={styles.name}>{userData.name}</Text>
            </View>

            <View style={styles.profileData}>
              <View style={styles.profileField}>
                <Text style={styles.label}>E-mail</Text>
                <Text style={styles.data}>{userData.email}</Text>
              </View>

              <View style={styles.profileField}>
                <Text style={styles.label}>Celular</Text>
                <Text style={styles.data}>{userData.phone ? formatPhoneNumber(userData.phone) : '-'}</Text>
              </View>
            </View>

            <Button
              title={"Sair"}
              logout={true}
              onPress={() => {
                signOut()
                navigation.navigate('Login')
              }}
            />

          </View>
        }
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
    marginBottom: 12,
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
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
