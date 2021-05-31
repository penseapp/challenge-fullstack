import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button, Input } from '../components'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../contexts/auth'
import { useLoading } from '../contexts/loading'

import logo from '../assets/logo-shop-ligth-blue.png'
import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function Login() {
  const navigation = useNavigation()
  const { signIn } = useAuth()
  const { startLoading, stopLoading, loading } = useLoading()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async () => {

    startLoading()

    await signIn(email, password)
      .then(() => {
        navigation.navigate('Home')
        setPassword('')
        setEmail('')
        setErrorMessage('')
      })
      .catch(err => {
        setErrorMessage('Algo deu errado, tente novamente!')
        console.log(err)
      })
      .finally(() => {
        stopLoading()
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>

          <View style={styles.header}>
            <Image style={styles.logo} resizeMode="contain" source={logo} />
            <Text style={styles.title}>VS STORE</Text>
          </View>

          <Text style={styles.errorMessage}>
            {errorMessage}
          </Text>

          <View style={styles.form}>

            <Input
              secureTextEntry={false}
              prefixIcon={'envelope'}
              placeholder={'Entre com o seu email'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={value => setEmail(value)}
            />

            <Input
              password={true}
              prefixIcon={'lock'}
              placeholder={'Entre com a sua senha'}
              value={password}
              onChangeText={value => setPassword(value)}
            />

            <Button
              disabled={loading}
              title="Login"
              onPress={handleLogin}
            />
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Ainda não possui conta?</Text>

            <TouchableOpacity
              onPress={() => { navigation.navigate('SignUp') }} >
              <Text style={styles.signUpBtnText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
  },

  header: {
    alignItems: 'center'
  },

  logo: {
    width: 110,
    height: 110,
  },

  title: {
    fontSize: 40,
    fontFamily: fonts.text,
    lineHeight: 40,
    textAlign: 'center',
    color: colors['light-blue'],
  },

  errorMessage: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: colors.danger,
    textAlign: 'center'
  },

  form: {
    paddingHorizontal: 40,
  },

  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  signUpText: {
    color: colors.h2
  },

  signUpBtnText: {
    color: colors['light-blue'],
    fontWeight: 'bold',
    paddingHorizontal: 5
  }

})
