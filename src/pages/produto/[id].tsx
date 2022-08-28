import axios from 'axios'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { Context } from 'vm'
import { useAuth } from '../../hooks/useAuth'
import { useCarrinho } from '../../hooks/useCarrinho'
import { Produto } from '../../interfaces/Produto'


export const getStaticPaths: GetStaticPaths<{name: string}> = async () =>{
	return {
		paths:[],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context: Context) => {
	const urlParamId: number = +context.params.id
	const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/produtos/' + urlParamId)
	const produto: Produto = await response.data
	return {
		props:{
			produto: produto
		}, revalidate: 60
	}
}

type ProdutoProps = {
	produto: Produto
}

const Produto: NextPage<ProdutoProps> = ({ produto }: ProdutoProps) => {
	const { adicionarProduto } = useCarrinho()
	const { isAuth, token } = useAuth()
	const router = useRouter()

	const adicionarWishList = async () =>{
		if(!isAuth) router.push('/login')
		try{
			await axios.post(
				process.env.NEXT_PUBLIC_BACKEND_API_URL + '/wishlist', 
				{ idProduto:  produto.id }, 
				{ headers: { 'Authorization': 'Bearer ' + token }},
			)
		} catch(err){
			console.log(err)
		} finally{
			router.push('/listadesejos')

		}

	} 


	if(!produto){
		return(
			<div className="flex h-full w-full items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 animate-spin">
					<path fillRule="evenodd" d="M12 5.25c-1.213 0-2.415.046-3.605.135a3.256 3.256 0 00-3.01 3.01c-.044.583-.077 1.17-.1 1.759L6.97 8.47a.75.75 0 011.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.752 1.751c.023-.65.06-1.296.108-1.939A4.756 4.756 0 018.282 3.89a49.423 49.423 0 017.436 0 4.756 4.756 0 014.392 4.392c.017.224.032.447.046.672a.75.75 0 01-1.497.092 48.187 48.187 0 00-.044-.651 3.256 3.256 0 00-3.01-3.01A47.926 47.926 0 0012 5.25zm6.97 6.22a.75.75 0 011.06 0l3 3a.75.75 0 11-1.06 1.06l-1.752-1.751a49.25 49.25 0 01-.108 1.939 4.756 4.756 0 01-4.392 4.392 49.412 49.412 0 01-7.436 0 4.756 4.756 0 01-4.392-4.392 49.112 49.112 0 01-.046-.672.75.75 0 111.497-.092c.013.217.028.434.044.651a3.256 3.256 0 003.01 3.01 47.951 47.951 0 007.21 0 3.256 3.256 0 003.01-3.01c.044-.583.077-1.17.1-1.759L17.03 15.53a.75.75 0 11-1.06-1.06l3-3z" clipRule="evenodd" />
				</svg>
				<span className="font-bold">
					Carregando...
	
				</span>
			</div>
		)
	}



	return (
		<div className='flex flex-col  space-y-4 w-full h-full'>

			<div className='flex flex-col space-y-4 bg-white p-4 md:p-8 '>
				<div>
					<span className='text-gray-500 text-sm'>Categoria: <span className='font-bold' >{produto.categoria || 'outros'}</span></span>
					<div className='w-full h-0.5 bg-gray-400 opacity-50'/>
					<h1 className='flex font-bold text-3xl py-4'>{produto.nome}</h1>
				</div>


				<div className='flex flex-col md:w-96 space-y-2 '>
					<span className='text-gray-500 text-sm'>Vendido e entregue pela <span className='font-bold'>PenseApp!</span></span>
					<div className='flex flex-row jus' >
						{
							produto.precoPromocional? 
								<div className='flex flex-col'>
									<span className='font-bold text-gray-500 opacity-50 line-through text-sm'>R$ {produto.preco?.toFixed(2)}</span>
									<span className='text-orange-500 font-bold text-4xl'>R$ {produto.precoPromocional.toFixed(2)}</span>

								</div> 
								: 
								<div>
									<span className='text-orange-500 font-bold text-4xl'>R$ {produto.preco?.toFixed(2)}</span> 

								</div>
						}
					</div>
					
					<div className='flex md:flex-row flex-col md:space-x-4 justify-center md:justify-start  pt-4'>
						<button 
							onClick={()=>{adicionarProduto(produto.id)}}
							className="flex space-x-2   h-12 items-center justify-center bg-orange-500 rounded py-2 font-bold border-2  border-orange-500 hover:bg-white hover:text-black text-white p-4 transition">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
								<path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
							</svg>
							<span >COMPRAR</span>
						</button>
						<button 
							onClick={adicionarWishList}
							className="flex space-x-2 h-12 mt-2 md:mt-0 items-center justify-center bg-orange-500 rounded py-2 font-bold border-2  border-orange-500 hover:bg-white hover:text-black text-white p-4 transition">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
								<path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
							</svg>


							<span>Adicionar à Lista</span>
						</button>
					</div>

				</div>
			</div>
			<div className="flex flex-col space-y-4 bg-white p-4 md:p-8">
				<div className="flex items-center">
					<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600">
						<path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
					</svg>

					<h1 className="font-bold text-xl">Descrição do produto</h1>
				</div>
				<div>
					<p>
						{
							produto.descricao
						}
					</p>

				</div>
			</div>
		</div>
	)
}

export default Produto
