import Link from 'next/link'
import { useCarrinho } from '../hooks/useCarrinho'

type CardButtonProps = {
    id: number;
	nome: string;
	preco?: number;
	precoPromocional?: number;
	categoria?: string;
}

export const CardProduto = (props: CardButtonProps) => {
	
	const { adicionarProduto } = useCarrinho()
	const PrecoProduto = () =>{
		if(!props.precoPromocional)	return <span className="font-bold text-left">R${props.preco? props.preco.toFixed(2) : '00.00' }</span>
		return <div className='flex flex-col'>
			<span className="font-bold text-sm  text-gray-500 opacity-60 line-through">R${props.preco? props.preco.toFixed(2) : '00.00' }</span>
			<span className="font-bold text-green-500 text-2xl">R${props.precoPromocional? props.precoPromocional.toFixed(2) : '00.00' }</span>
		</div>
	}

	return(
		<div className="flex w-full p-4   flex-col md:flex-row bg-white  hover:shadow-lg transition">
			<Link href={`/produto/${props.id}`}>
				<div className="flex flex-col h-auto w-full cursor-pointer max-w-2xl mr-auto max-h-full justify-center">
					<span className="flex flex-col justify-center space-y-2">{props.categoria || 'outros'}</span>
					<h1 className="font-bold capitalize text-ellipsis sm:text-lg text-justify break-all overflow-hidden ">{props.nome}</h1>
	
				</div>
			</Link>

			<div className="bg-gray-700 bg-opacity-10 w-0.5 h-22"/>

			<div className="flex flex-col justify-center space-y-2 pt-4 md:pt-0 md:pl-4">

				<PrecoProduto/>
				<button onClick={()=>{
					adicionarProduto(props.id)
				}} className="flex flex-row space-x-2 bg-orange-400 items-center justify-center rounded py-2 font-bold border-2  border-orange-400 hover:bg-white hover:text-black text-white p-4 transition">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
					</svg>
					<span className="">COMPRAR</span>
				</button>
			</div>


		</div>

	)
}