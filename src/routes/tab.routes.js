import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/MaterialIcons'

import { Home, Favorites, Account } from '../pages'
import colors from '../utils/constants/colors.json'

const tabRoutes = createBottomTabNavigator()

export default function AuthRoutes() {
  return (
    <tabRoutes.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Favoritos: 'favorite',
            'Minha conta': 'person'
          }

          return <Icon name={icons[route.name]} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: colors['dark-blue'],
        inactiveTintColor: colors['light-primary'],
        labelPosition: 'beside-icon',
        style: {
          backgroundColor: colors['light-blue'],
          paddingVertical: "auto",
          height: 60
        }
      }}
    >
      <tabRoutes.Screen name="Home" component={Home} />
      <tabRoutes.Screen name="Favoritos" component={Favorites} />
      <tabRoutes.Screen name="Minha conta" component={Account} initialParams={{ updated: false }} />
    </tabRoutes.Navigator>
  )
}
