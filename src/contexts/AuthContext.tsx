import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { useHistory } from 'react-router-dom'
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
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('@Doit:accessToken')
    const user = localStorage.getItem('@Doit:user')
    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) }
    }
    return {} as AuthState
  })

  const history = useHistory()

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    console.log('teste')
    const response = await api.post('/login', { email, password })
    const { accessToken, user } = response.data
    localStorage.setItem('@Doit:accessToken', accessToken)
    localStorage.setItem('@Doit:user', JSON.stringify(user))
    console.log('teste2')

    history.push('/dashboard')
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Doit:accessToken')
    localStorage.removeItem('@Doit:user')
    setData({} as AuthState)
  }, [])
  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
