import { useContext } from 'react'
import { CarrinhoProduto } from '../@types/CarrinhoProduto'
import { CarrinhoContext } from '../contexts/CarrinhoContext'

export const useCarrinho = () =>{
	const { carrinho, setCarrinho } = useContext(CarrinhoContext)
	
	const adicionarProduto = (idProduto: number) =>{	
		const newCarrinho: CarrinhoProduto[] = carrinho
		const index: number = newCarrinho.findIndex( cart => cart.id === idProduto)
		if(index > -1){
			newCarrinho[index].quantidade++
		}
		else{
			newCarrinho.push({
				id: idProduto,
				quantidade: 1
			})
		}
		setCarrinho([...newCarrinho])
		localStorage.setItem('carrinho', JSON.stringify([...newCarrinho]))

	}

	const limparCarrinho = () =>{
		setCarrinho([])
		localStorage.setItem('carrinho', JSON.stringify([]))

	}

	const removerProduto = (idProduto: number) =>{
		const index = carrinho.findIndex( cart => cart.id === idProduto)
		const newCarrinho: CarrinhoProduto[] = carrinho.filter(cart => cart.id != carrinho[index].id)
		setCarrinho(newCarrinho)
		localStorage.setItem('carrinho', JSON.stringify(newCarrinho))
		
	}

	const somarProduto = (idProduto: number) =>{
		const index = carrinho.findIndex( cart => cart.id === idProduto)
		const newCarrinho: CarrinhoProduto[] = carrinho.map((cart)=>{
			if(cart.id === carrinho[index].id){
				cart.quantidade += 1
			}
			return cart
		})
		setCarrinho(newCarrinho)
		localStorage.setItem('carrinho', JSON.stringify(newCarrinho))

	}

	const subtrairProduto = (idProduto: number) =>{
		const index = carrinho.findIndex( cart => cart.id === idProduto)
		let newCarrinho: CarrinhoProduto[] = carrinho.map((cart)=>{
			if(cart.id === carrinho[index].id){
				cart.quantidade -= 1
			}
			return cart
		})
		newCarrinho = newCarrinho.filter( cart => cart.quantidade > 0)
		setCarrinho(newCarrinho)
		localStorage.setItem('carrinho', JSON.stringify(newCarrinho))

	}

	return { carrinho, setCarrinho, adicionarProduto, limparCarrinho, removerProduto, somarProduto, subtrairProduto }
}