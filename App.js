import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'

// Contexts
import { AuthProvider } from './src/contexts/auth'
import { LoadingProvider } from './src/contexts/loading'

import { useFonts, RozhaOne_400Regular } from '@expo-google-fonts/rozha-one'

import Routes from './src/routes'
import colors from './src/utils/constants/colors.json'

export default function App() {
  let [fontsLoaded] = useFonts({
    RozhaOne_400Regular,
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors['dark-blue']} />
      <AuthProvider>
          <LoadingProvider>
            <Routes />
          </LoadingProvider>
      </AuthProvider>
    </>
  )
}
