import axios from 'axios'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ListaProdutos } from '../components/ListaProdutos'
import { Produto } from '../interfaces/Produto'
import { buscarTodosProdutos } from '../services/api'

const Home: NextPage = () => {
	const [listaProdutos, setListaProdutos] = useState<Produto[]>([])
	const buscarProdutos = async () =>{
		const produtos: Produto[] = await buscarTodosProdutos()
		setListaProdutos(produtos)
	}
	useEffect(()=>{
		buscarProdutos()
	},[])
	return (
		<div className="flex flex-col justify-center p-4 ">

			<ListaProdutos listaProdutos={listaProdutos} />
			
		</div>

	)
}

export default Home
