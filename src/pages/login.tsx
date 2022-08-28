import { NextPage } from 'next'
import { FormCadastro } from '../components/FormCadastro'
import { FormLogin } from '../components/FormLogin'
import { useAuth } from '../hooks/useAuth'
import { useRouter } from 'next/router'

const Login: NextPage = () =>{
	const { isAuth } = useAuth()
	const router  = useRouter()

	if(isAuth){
		router.push('/')

	}

	return (
		<div className="flex flex-col md:flex-row w-full h-full px-4 md:px-14 justify-center pt-4">
			<FormLogin/>
			<div className="bg-gray-400 opacity-40 h-0.5 md:h-4/6 md:w-0.5"/>
			<FormCadastro/>
		</div>
	)
}

export default Login
