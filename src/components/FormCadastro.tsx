import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Delay from '../utils/Delay'
import { cadastarUsuario } from '../services/api'

export const FormCadastro = () => {
	const { register, handleSubmit } = useForm()
	const [ errorCadastro, setErrorCadastro ] = useState<boolean>(false)

	const cadastrar = async (nome: string, email: string, senha: string) => {
		try{
			await cadastarUsuario(nome, email, senha)
			setErrorCadastro(false)
		} catch(err){
			setErrorCadastro(true)
		}
	}

	useEffect(()=>{
		if(errorCadastro){
			Delay(6000).then(()=>setErrorCadastro(false))
		}
	}, [errorCadastro])

	const onSubmit = (data : any) => {
		cadastrar(data.nome, data.email, data.senha)
	}
	
	
	return(
		<form className="flex flex-col sm:p-4 md:p-14 sm:m-0 md:m-4 space-y-4 md:w-full md:w-full md:max-w-lg h-full" onSubmit={handleSubmit(onSubmit)}>
			<h3 className="text-center font-bold text-orange-500 text-2xl">QUERO ME CADASTRAR</h3>
			{	
				errorCadastro?				
					<div className='flex w-full justify-center bg-red-400 rounded animate-bounce'>
						<p>FALHA NO CADASTRO!!!</p>
					</div> : <></>
			}
			<input 
				className="p-3 rounded-md border border-black hover:border-orange-400"
				type="text" 	 
				placeholder="Nome de usuario *"
				{...register('nome', {
					required: 'Required',
					minLength: {
						value: 6,
						message: 'O nome precisa de pelo menos 6 caracteres!'
					}
				})}
			/>
			<input 
				className="p-3 rounded-md border border-black hover:border-orange-400"
				type="email"	 
				placeholder="E-mail *"
				{...register('email', {
					required: 'Required'
				})}
			
			/>
			<input 
				className="p-3 rounded-md border border-black hover:border-orange-400"
				type="password" 
				placeholder="Crie sua senha *"
				{...register('senha', {
					required: 'Required',
					minLength: {
						value: 6,
						message: 'A senha precisa de pelo menos 6 caracteres!'
					}
				})}
			
			/>

			<button 
				className="flex justify-center hover:bg-white  font-bold rounded border border-orange-500 hover:text-orange-500 py-2 bg-orange-500 text-white transition"
				type="submit"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
				</svg>

				<span>CADASTRAR</span>
			</button>

		</form>
	)
}