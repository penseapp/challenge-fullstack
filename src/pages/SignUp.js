import React, { useState } from 'react'
import {
  Platform, KeyboardAvoidingView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity
} from 'react-native'
import { Input, StepProgress } from '../components'
import { ProgressSteps } from 'react-native-progress-steps'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/FontAwesome5'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function SignUp() {
  const navigation = useNavigation()
  const [activeStep, setActiveStep] = useState(0)

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
              />

              <Text style={styles.label}>Celular</Text>
              <Input
                placeholder={'(xx)xxxxx-xxxx'}
                keyboardType={'phone-pad'}
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
          >
            <View style={styles.containerInput}>

              <Text style={styles.label}>E-mail</Text>
              <Input
                testID="signUp-email-input"
                placeholder={'Ex: pedrohs@gmail.com'}
                keyboardType={'email-address'}
              />

              <Text style={styles.label}>Confirmar e-mail</Text>
              <Input
                testID="signUp-confirmEmail-input"
                placeholder={'Ex: pedrohs@gmail.com'}
                keyboardType={'email-address'}
              />
            </View>
          </StepProgress>

          <StepProgress
            key={2}
            label="Senha"
            previousBtnText={true}
            finishBtnText={true}
            onPrevious={() => setActiveStep(activeStep - 1)}
          >
            <View style={styles.containerInput}>
              <Text style={styles.messageValidation}>
                Para sua segurança, a senha deve ter no mínimo 8 caracteres, com
                números, letra maiúscula e minúscula e caracteres especiais.
              </Text>

              <Text style={styles.label}>Senha</Text>
              <Input
                placeholder={'••••••••'}
                password={true}
              />

              <Text style={styles.label}>Confirmar senha</Text>
              <Input
                placeholder={'••••••••'}
                password={true}
              />
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

})
