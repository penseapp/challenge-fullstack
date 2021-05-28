import React from 'react'
import { ProgressStep } from 'react-native-progress-steps'
import { StyleSheet } from 'react-native'

import colors from '../utils/constants/colors.json'

export default function StepProgress({
  children,
  finishBtnText,
  previousBtnText,
  nextBtnText,
  ...rest }) {

  return (
    <ProgressStep
      nextBtnText={nextBtnText && 'Próximo'}
      previousBtnText={previousBtnText && 'Anterior'}
      finishBtnText={finishBtnText && 'Finalizar'}
      nextBtnStyle={(nextBtnText || finishBtnText) && styles.button}
      previousBtnStyle={previousBtnText && styles.button}
      nextBtnTextStyle={(nextBtnText || finishBtnText) && styles.buttonText}
      previousBtnTextStyle={previousBtnText && styles.buttonText}
      {...rest}
    >
      {children}
    </ProgressStep>
  )
};

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 90,
    backgroundColor: colors['light-blue'],
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: colors['light-secondary'],
    fontWeight: 'bold',
    fontSize: 16
  },
});

