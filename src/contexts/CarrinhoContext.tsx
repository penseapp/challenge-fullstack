import { Context, createContext, useEffect, useState } from 'react'
import { CarrinhoProduto } from '../@types/CarrinhoProduto'
import { ProviderProps } from '../@types/ProviderProps'


type CarrinhoContextType = {
    carrinho: CarrinhoProduto[],
    setCarrinho: (carrinho: CarrinhoProduto[])=>void
}

const defaultValue : CarrinhoContextType = {
	carrinho:[],
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setCarrinho: (carrinho: CarrinhoProduto[])=>{return}
}




export const CarrinhoContext : Context<CarrinhoContextType> = createContext(defaultValue)

export const CarrinhoProvider = ({ children } : ProviderProps) => {
	const [carrinho, setCarrinho] = useState<CarrinhoProduto[]>(defaultValue.carrinho) 

	useEffect(()=>{
		if(typeof window !== 'undefined' ){
			const localCarrinho = localStorage.getItem('carrinho')
			const listaCarrinho = localCarrinho? JSON.parse(localCarrinho) : []
			if(listaCarrinho){
				setCarrinho(listaCarrinho)
			}
		}
	},[])


	return(
		<CarrinhoContext.Provider 
			value={{
				carrinho,
				setCarrinho
			}}
		>
			{children}
		</CarrinhoContext.Provider>
	)
}

