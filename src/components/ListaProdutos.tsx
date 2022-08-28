import { useRouter } from 'next/router'
import { Produto } from '../interfaces/Produto'
import { CardProduto } from './CardProduto'
import styles from '../styles/listaProdutos.module.css'

type ListaProdutosProps = {
	listaProdutos: Produto[] 
}

export const ListaProdutos = (props : ListaProdutosProps) => {
	const router = useRouter()

	return(
		<div className={styles.listaProdutos}>
		
		
			{
				props.listaProdutos.length > 0?
					props.listaProdutos.map((produto: Produto, index: number) => {
						return(
							<CardProduto 
								key={index} 
								id={produto.id} 
								nome={produto.nome} 
								preco={produto.preco}  
								precoPromocional={produto.precoPromocional}
								categoria={produto.categoria}
							/>						
						)
					}):
					<div className='font-bold flex w-full h-full justify-center '>
						<p>
							Nenhum produto encontrado!!!

						</p>
					</div>
			}
			
		
		</div>

	)
}