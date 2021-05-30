import React, { useState } from 'react'
import {
  Platform, KeyboardAvoidingView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity
} from 'react-native'
import { Input, StepProgress, ImagePickerFunction } from '../components'
import { ProgressSteps } from 'react-native-progress-steps'
import { useNavigation } from '@react-navigation/native'
import api, { STORAGE_URL } from '../services/api'
import Icon from '@expo/vector-icons/FontAwesome5'
import { formatPhoneNumber } from '../utils'
import { useLoading } from '../contexts/loading'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function SignUp() {
  const navigation = useNavigation()
  const { startLoading, stopLoading, loading } = useLoading()

  const [activeStep, setActiveStep] = useState(0)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [data, setData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
    avatar: null
  })

  const onChange = (type, value) => {
    setData({ ...data, [type]: value })
  }

  const signUp = async () => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    startLoading()

    const formData = new FormData()

    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append('name', data.name)
    formData.append('phone', data.phone)
    if (data.avatar !== null) {
      formData.append('file', data.avatar)
    }

    await api
      .post('/user', formData, config)
      .then(res => {
        navigation.navigate('Login')
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
      })

  }

  const handleEmail = () => {
    if (data.email !== data.confirmEmail) {
      setEmailIsValid(true)
      setErrorMessage(
        'Ops, os e-mails são diferentes!\nPara prosseguir, é necessário preencher os campos corretamente!'
      )
    } else {
      setEmailIsValid(false)
      setErrorMessage('')
    }
  }

  const handlePassword = () => {
    if (data.password !== data.confirmPassword) {
      setPasswordIsValid(true)
      setErrorMessage(
        'Ops, as senha são diferentes!\nPara prosseguir, é necessário preencher os campos corretamente!'
      )
    } else {
      setPasswordIsValid(false)
      setErrorMessage('')
    }
  }

  return (
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
          <Text style={styles.headerTitle}>Cadastrar</Text>
        </View>

        <Text style={styles.message}> É rápido, simples e gratuito!</Text>

        <ProgressSteps
          style={styles.progress}
          activeStep={activeStep}
          activeStepIconBorderColor={colors['light-blue']}
          completedProgressBarColor={colors['light-blue']}
          activeLabelColor={colors['light-blue']}
          completedLabelColor={colors['light-blue']}
          completedStepIconColor={colors['light-blue']}
          completedCheckColor={colors['light-secondary']}
        >

          <StepProgress
            key={0}
            nextBtnText={true}
            label="Pessoal"
            onNext={() => setActiveStep(activeStep + 1)}
          >
            <View style={styles.containerInput}>
              <Text style={styles.label}>Nome</Text>
              <Input
                placeholder={'Ex: Pedro Henrique Santos'}
                value={data.name}
                onChangeText={value => onChange('name', value)}
              />

              <Text style={styles.label}>Celular</Text>
              <Input
                placeholder={'(xx)xxxxx-xxxx'}
                keyboardType={'phone-pad'}
                value={formatPhoneNumber(data.phone)}
                onChangeText={value => {
                  onChange('phone', value)
                }}
              />
            </View>
          </StepProgress>

          <StepProgress
            key={1}
            nextBtnText={true}
            previousBtnText={true}
            label="Login"
            onNext={() => setActiveStep(activeStep + 1)}
            onPrevious={() => setActiveStep(activeStep - 1)}
            removeBtnRow={emailIsValid}
          >
            <View style={styles.containerInput}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              <Text style={styles.label}>E-mail</Text>
              <Input
                placeholder={'Ex: pedrohs@gmail.com'}
                keyboardType={'email-address'}
                value={data.email}
                onChangeText={value => onChange('email', value)}
                onEndEditing={() => handleEmail()}
              />

              <Text style={styles.label}>Confirmar e-mail</Text>
              <Input
                placeholder={'Ex: pedrohs@gmail.com'}
                keyboardType={'email-address'}
                value={data.confirmEmail}
                onChangeText={value => onChange('confirmEmail', value)}
                onEndEditing={() => handleEmail()}
              />
            </View>
          </StepProgress>

          <StepProgress
            key={2}
            label="Senha"
            previousBtnText={true}
            nextBtnText={true}
            onNext={() => setActiveStep(activeStep + 1)}
            onPrevious={() => setActiveStep(activeStep - 1)}
            removeBtnRow={passwordIsValid}
          >
            <View style={styles.containerInput}>
              <Text style={styles.messageValidation}>
                Para sua segurança, a senha deve ter no mínimo 8 caracteres, com
                números, letra maiúscula e minúscula e caracteres especiais.
              </Text>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              <Text style={styles.label}>Senha</Text>
              <Input
                placeholder={'••••••••'}
                password={true}
                value={data.password}
                onChangeText={value => onChange('password', value)}
                onEndEditing={() => handlePassword()}
              />

              <Text style={styles.label}>Confirmar senha</Text>
              <Input
                placeholder={'••••••••'}
                password={true}
                value={data.confirmPassword}
                onChangeText={value => onChange('confirmPassword', value)}
                onEndEditing={() => handlePassword()}
              />
            </View>
          </StepProgress>

          <StepProgress
            key={3}
            label="Foto"
            previousBtnText={true}
            finishBtnText={true}
            onPrevious={() => setActiveStep(activeStep - 1)}
            onSubmit={() => !loading && signUp()}
          >
            <View style={styles.containerInput}>
              <ImagePickerFunction
                onChange={image => onChange('avatar', image)}
              >
                <Image
                  source={{
                    uri: data.avatar
                      ? data.avatar.uri
                      : `${STORAGE_URL}/user/default_avatar.png`
                  }}
                  style={styles.avatar}
                />
              </ImagePickerFunction>
              <ImagePickerFunction
                onChange={image => onChange('avatar', image)}
              >
                <Text style={styles.avatarText}>Alterar</Text>
              </ImagePickerFunction>
            </View>
          </StepProgress>

        </ProgressSteps>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  containerInput: {
    marginBottom: 20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  goBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    left: 0
  },

  headerTitle: {
    fontSize: 25,
    fontFamily: fonts.text,
    color: colors.h1,
    opacity: 0.6,
    textAlign: 'center'
  },

  message: {
    fontSize: 23,
    fontFamily: fonts.text,
    color: colors['light-blue'],
    textAlign: 'center'
  },

  messageValidation: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    color: colors.h2,
    textAlign: 'center'
  },

  errorMessage: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: colors.danger,
    textAlign: 'center'
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

  avatar: {
    width: 180,
    height: 180,
    borderRadius: 180,
    borderWidth: 3,
    borderColor: colors.h2,
    alignSelf: 'center',
    marginTop: 20
  },

  avatarText: {
    color: colors.h2,
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
    textDecorationLine: 'underline',
    alignSelf: 'center'
  }

})
