import React, { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext({
  signed: false,
  user: {}
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signIn = async (email, password) => {
    return new Promise((resolve, reject) => {
      const data = {
        email,
        password
      }

      api
        .post('/auth/login', data)
        .then(async res => {
          const userData = res.data

          setUser(userData.user)
          resolve(res)

          await AsyncStorage.setItem('user-data', JSON.stringify(userData.user))
        })
        .catch(err => {
          reject(err)
          console.error(err)
        })
    })
  }

  const signOut = async () => {
    await AsyncStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
