import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login, SignUp, EditAccount, ProductDetails } from '../pages'
import AuthRoutes from './tab.routes'

const stackRoutes = createStackNavigator()

export default function AppRoutes() {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false }}
    >
      <stackRoutes.Screen
        name="Login"
        component={Login}
      />

      <stackRoutes.Screen
        name="SignUp"
        component={SignUp}
      />

      <stackRoutes.Screen
        name="EditAccount"
        component={EditAccount}
      />

      <stackRoutes.Screen
        name="ProductDetails"
        component={ProductDetails}
      />

      <stackRoutes.Screen
        name="Home"
        component={AuthRoutes}
      />
    </stackRoutes.Navigator>
  )
}
