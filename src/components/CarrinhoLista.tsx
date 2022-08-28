import Link from 'next/link'
import { useCarrinho } from '../hooks/useCarrinho'
import { Produto } from '../interfaces/Produto'

type CarrinhoListaProps = {
	produtos: Produto[],
}
export const CarrinhoLista = (props: CarrinhoListaProps) =>{
	const { limparCarrinho, removerProduto, somarProduto, subtrairProduto } = useCarrinho()
	
	return(
		<div className="flex flex-col  ">
			<div className='flex flex-row space-x-4 p-2  text-lg font-bold items-center'>
				<div className='flex flex-row mr-auto' >
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-600">
						<path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
					</svg>
					<span>PRODUTOS</span>
				</div>
				<button onClick={limparCarrinho} className='flex text-white bg-orange-500 rounded-md p-2 border space-x-2 px-3 hover:text-black hover:border-orange-500 hover:bg-orange-50 transition '>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
						<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
					</svg>
					<span className='text-sm'>LIMPAR CARRINHO</span>
				</button>
				
			</div>
			<div className="flex flex-col space-y-4 ">
				{
					props.produtos.map((produto: Produto, key: number)=>{
						return(
							<div key={key} className="flex flex-col md:flex-row  md:items-center p-4 md:h-28  bg-white shadow-lg my-1 md:m-2">
								<Link href={`/produto/${produto.id}`}>
									<div className='md:mr-auto flex p-2  flex-col py-4 grow cursor-pointer'>
										<span className="text-gray-600 font-bold opacity-60 text-sm">{produto.categoria? produto.categoria: 'outros'}</span>
										<h1 className="font-bold">{produto.nome}</h1>
									</div>
								</Link>

								<div className='flex flex-row'> 
									<div className='flex flex-col  h-full items-center justify-center  space-y-2 ' >
										<span className="text-sm">Quantidade:</span>
										<div className='flex space-x-3 text-white '>
											<button className='bg-orange-500 w-6 rounded' onClick={()=>{
												subtrairProduto(produto.id)
											}}> - </button>
											<p className='text-black'>{produto.quantidade}</p>
											<button className='bg-orange-500 w-6 rounded' onClick={()=>{
												somarProduto(produto.id)
											}}> + </button>
										</div>
										<button className='font-bold cursor-pointer hover:text-zinc-600 hover:underline' onClick={()=>{
											removerProduto(produto.id)
										}}>
											Remover
										</button>

									</div>
								

									<div className='flex flex-col ml-auto md:w-48 items-center md:items-end space-y-2  ' >
										
										<span className='text-black text-sm '>Preço à vista: </span>
										<span className='text-orange-600 text-2xl font-bold'>R${produto.precoPromocional? produto.precoPromocional.toFixed(2)  : produto.preco?.toFixed(2)}</span>
									</div>

								</div>

							</div>	
						)
					})
				}
			</div>
		</div>
	)
}