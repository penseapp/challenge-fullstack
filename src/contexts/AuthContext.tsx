import axios from 'axios'
import { Context, createContext, useEffect, useState } from 'react'
import { ProviderProps } from '../@types/ProviderProps'
import { Usuario } from '../interfaces/Usuario'

type AuthContextType = {
	isAuth: boolean
    token: string
	usuario: Usuario
	setIsAuth: (isAuth: boolean) => void
	setToken: (token: string) => void
	setUsuario: (usuario: Usuario) => void

}

const defaultValue : AuthContextType = {
	isAuth: false,
	token: '',
	usuario: {
		id: 0,
		nome: '',
		email: ''
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setIsAuth: (isAuth: boolean) => {return},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars

	setToken: (token: string) => {return},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setUsuario: (usuario: Usuario) => {return}

	
}

export const AuthContext : Context<AuthContextType> = createContext(defaultValue)

export const AuthProvider = ({ children } : ProviderProps) => {
	const [token, setToken] = useState<string>(defaultValue.token)
	const [usuario, setUsuario] = useState<Usuario>(defaultValue.usuario)
	const [isAuth, setIsAuth] = useState<boolean>(defaultValue.isAuth)
	
	useEffect(()=>{
		if(typeof window !== 'undefined' ){

			const localAuthToken = localStorage.getItem('authToken')
			if(localAuthToken){
				axios.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/token', {}, {headers: {'Authorization': `Bearer ${localAuthToken}`}})
					.then(response =>{
						setToken(localAuthToken)
						setUsuario(response.data.usuario)
						setIsAuth(response.data.auth)
					})
					.catch(err =>{
						console.log(err)
					})
			}
		}
	},[])

	return(
		<AuthContext.Provider 
			value={{
				isAuth: isAuth,
				usuario: usuario,
				token: token,
				setToken,
				setUsuario,
				setIsAuth
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
