import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { api } from '../services/api'

interface childrenProps {
  children: ReactNode
}

interface User {
  email: string
  id: string
  name: string
}
interface AuthState {
  accessToken: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  accessToken: string
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  adminMode: (option: Boolean) => void
  isAdm: Boolean
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const AuthProvider = ({ children }: childrenProps) => {
  const [isAdm, setIsAdm] = useState<Boolean>(false)

  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('@Penseapp:accessToken')
    const user = localStorage.getItem('@Penseapp:user')
    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) }
    }
    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/login', { email, password })
    const { accessToken, user } = response.data
    localStorage.setItem('@Penseapp:accessToken', accessToken)
    localStorage.setItem('@Penseapp:user', JSON.stringify(user))
    setData({ user, accessToken })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Penseapp:accessToken')
    localStorage.removeItem('@Penseapp:user')
    setData({} as AuthState)
  }, [])

  const adminMode = useCallback((option: Boolean) => {
    setIsAdm(option)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signOut,
        adminMode,
        isAdm,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
