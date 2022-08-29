import axios from 'axios'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useCarrinho } from '../hooks/useCarrinho'
import { Produto } from '../interfaces/Produto'
import { buscarWishlistUsuario, deletarProdutoWishlist } from '../services/api'

const ListaDesejos: NextPage = () =>{
	const { isAuth, token } = useAuth() 
	const router = useRouter()
	const { adicionarProduto } = useCarrinho()
	const [produtos, setProdutos] = useState<Produto[]>([])
	
	const carregarProdutos = async () =>{
		const response = await buscarWishlistUsuario(token)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const prods: Produto[] = response.data.map((data: any)=>{
			return data.produto
		})
		setProdutos(prods)
		
	}

	const salvarProdutoCarrinho = async (idProduto: number) =>{
		await adicionarProduto(idProduto)
		
	}

	const removerProduto = async (idProduto: number) =>{
		await deletarProdutoWishlist(idProduto, token)
		carregarProdutos()
	}

	useEffect(()=>{
		if(isAuth)
			carregarProdutos()
	},[isAuth])



	if(produtos.length > 0){
		return(
			<div className="h-full w-full flex  flex-col  items-center space-y-4 md:p-12">

				{
					produtos.map((produto, key)=>{
						console.log(produto)
						return(
							<div key={key} className="flex flex-col md:flex-row w-full md:items-center p-4 md:h-28  bg-white shadow-lg my-1 md:m-2">
								<Link href={'/produto/' + produto.id}>
									<div className='md:mr-auto flex p-2  flex-col py-4 grow hover:cursor-pointer'>
										<span className="text-gray-600 font-bold opacity-60 text-sm">{produto.categoria? produto.categoria: 'outros'}</span>
										<h1 className="font-bold hover:underline ">{produto.nome}</h1>
									</div>
								</Link>
								<div className='flex flex-row space-x-8'> 
									<div className='flex flex-col items-center'>
										<h1 className="text-sm">Preço atual:</h1>
										{
											produto.precoPromocional?
												<div className='flex flex-col'>
													<span className="font-bold text-sm  text-gray-500 opacity-60 line-through">R${produto.preco? produto.preco.toFixed(2) : '00.00' }</span>
													<span className="font-bold text-green-500 text-2xl">R${produto.precoPromocional? produto.precoPromocional.toFixed(2) : '00.00' }</span>
												</div>
												:
												<span className="font-bold text-left text-xl">R${produto.preco? produto.preco.toFixed(2) : '00.00' }</span>
										}
									</div>
									<div className='flex flex-row  h-full items-center justify-center  space-x-2 ' >
										<button onClick={()=>{
											salvarProdutoCarrinho(produto.id)
										}} className='font-bold cursor-pointer bg-orange-400 px-4 py-2 rounded-md text-white hover:bg-orange-600 transition'>
											Comprar
										</button>
										<button onClick={()=>{
											removerProduto(produto.id)
										}} className='font-bold cursor-pointer bg-orange-400 px-4 py-2 rounded-md text-white hover:bg-orange-600 transition'>
											Remover
										</button>

									</div>
								</div>

							</div>	
						)
					})
				}
			</div>


		)
	}




	return(
		<div className="h-full w-full flex flex-col justify-center items-center space-y-4">
			<span className="text-2xl">Sua lista de desejos está vazia...</span>
			<button 
				className="p-3 bg-orange-400 rounded text-white font-bold" 
				onClick={()=>{
					router.push('/')
				}}
			>VOLTAR A COMPRAS</button>
		</div>
	)

	
}

export default ListaDesejos