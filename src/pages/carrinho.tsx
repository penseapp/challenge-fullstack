import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CarrinhoLista } from '../components/CarrinhoLista'
import { useCarrinho } from '../hooks/useCarrinho'
import { Produto } from '../interfaces/Produto'
import { buscarListaProdutosPeloId } from '../services/api'

const Carrinho: NextPage = () =>{
	const { carrinho } = useCarrinho()
	const [ produtos, setProdutos ] = useState<Produto[]>([])
	const [ valorTotal, setValorTotal ] = useState<number>(0)
	const router = useRouter()
	
	const buscarProdutos = async () => {
		const listaIds: number[] = []
		carrinho.forEach((cart)=>{
			listaIds.push(cart.id)
		})	
		const ListaProdutos: Produto[] = await buscarListaProdutosPeloId(listaIds)
		
		ListaProdutos.map((prod: Produto)=>{
			const index = carrinho.findIndex(produto=> produto.id === prod.id)
			prod.quantidade = carrinho[index].quantidade
			if(prod.preco) 
				prod.preco = prod.preco * prod.quantidade
				
			if(prod.precoPromocional) 
				prod.precoPromocional = prod.precoPromocional * prod.quantidade
		
		})
		
		setProdutos(ListaProdutos)
	}


	useEffect(()=>{
		buscarProdutos()
	},[carrinho])

	useEffect(()=>{
		let valor = 0
		produtos.forEach((prod)=>{
			if(prod.precoPromocional){
				valor += prod.precoPromocional
			}else{
				if(prod.preco)
					valor += prod.preco
			}		
		})
		setValorTotal(valor)
	},[produtos])

	

	if(carrinho.length === 0){
		return(
			<div className="flex flex-col h-full w-full items-center justify-center space-y-6">
				<div className='flex flex-col text-center'>
					<span className='font-bold'>o seu carrinho está vazio.</span>
					<span>Deseja olhar outros produtos similares?</span>
				</div>
				<div>
					<button onClick={()=>{
						router.push('/')
					}} className='flex justify-centerhover:bg-white font-bold rounded border border-orange-500  py-2 bg-orange-500 text-white transition  p-2 space-x-2'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
						</svg>
						<span>CONTINUAR COMPRANDO</span>
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className="py-4 h-full" >
			<div className="p-2  py-8 flex flex-col items-end ">
				<h1 className="font-bold flex flex-row">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>

					INFORMAÇÕES DO PEDIDO</h1>
				<p className="font-bold">Valor total: <span className="text-orange-400">R${valorTotal.toFixed(2)}</span> </p>
			</div>
			<CarrinhoLista produtos ={produtos} />

		</div>
	)
}

export default Carrinho