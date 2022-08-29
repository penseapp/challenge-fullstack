import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import { loginUsuario } from '../services/api'

export const FormLogin = () => {
	const router = useRouter()
	const { authLogin } = useAuth()

	const { register, handleSubmit} = useForm()
	const [ errorLogin, setErrorLogin] = useState(false) 

	const onSubmit = async (data : any) => {

		try{

			const authData = await loginUsuario(data.email, data.senha)
			authLogin(true,	authData.usuario, authData.access_token)
			setErrorLogin(false)
			router.push('/')

			
		} catch(err){
			setErrorLogin(true)
		}
	}

	useEffect(()=>{
		setErrorLogin(false)
	},[errorLogin])

	return(
		<form className="flex flex-col sm:p-4 md:p-14 sm:m-0 md:m-4 space-y-4 md:w-full md:w-full md:max-w-lg h-full" onSubmit={handleSubmit(onSubmit)}>
			<h3 className="text-center font-bold text-orange-500 text-2xl">JÁ TENHO CADASTRO</h3>
			{	
				errorLogin?
					<div className="flex w-full justify-center bg-red-400 rounded animate-bounce">
						<p>Email ou Senha invalido!!!</p>
					</div> 
					: 
					<></>
			}
			<input 	className="p-3 rounded-md border border-black hover:border-orange-400" placeholder="E-mail *" type="email"     {...register('email',  { required: true })}  />
			<input 	className="p-3 rounded-md border border-black hover:border-orange-400" placeholder="Senha *"  type="password"  {...register('senha',  { required: true })}  />
			<button className="flex justify-center hover:bg-white font-bold rounded border border-orange-500 hover:text-orange-500 py-2 bg-orange-500 text-white transition" type="submit">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
				</svg>
				<span>ENTRAR</span>	
			</button>			
		</form>
	)
}