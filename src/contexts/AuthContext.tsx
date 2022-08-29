import axios from 'axios'
import { Context, createContext, useEffect, useState } from 'react'
import { ProviderProps } from '../@types/ProviderProps'
import { Usuario } from '../interfaces/Usuario'
import { validarToken } from '../services/api'

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
	
	const atualizarDados = async (token: string) => {
		const data = await validarToken(token)
		setToken(token)
		setUsuario(data.usuario)
		setIsAuth(data.auth)
	}

	useEffect(()=>{
		if(typeof window !== 'undefined' ){

			const localAuthToken = localStorage.getItem('authToken')
			if(localAuthToken){
				try{
					atualizarDados(localAuthToken)
				}catch(err){
					console.log(err)
				}
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
