import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Usuario } from '../interfaces/Usuario'

export const useAuth = ()=>{

	const {isAuth, usuario, token, setIsAuth, setToken, setUsuario} = useContext(AuthContext)

	const authLogin = (isAuth: boolean, usuario: Usuario, token: string) =>{
		localStorage.setItem('authToken', token)
		
		setIsAuth(isAuth)
		setToken(token)
		setUsuario(usuario)
	}

	const authSair = () =>{
		setIsAuth(false)
		localStorage.removeItem('authToken')
	}

	return {isAuth, usuario, token, authLogin, authSair}
}