import axios from 'axios'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ListaProdutos } from '../components/ListaProdutos'
import { Produto } from '../interfaces/Produto'

const Home: NextPage = () => {
	const [listaProdutos, setListaProdutos] = useState<Produto[]>([])
	const buscarProdutos = async () =>{
		const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/produtos')
		const produtos: Produto[] = response.data
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
