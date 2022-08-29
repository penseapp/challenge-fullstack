import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useCarrinho } from '../hooks/useCarrinho'
export const Navbar = () => {
	const router = useRouter()
	const { isAuth, usuario, authSair } = useAuth()
	const [ inputValue, setInputValue] =  useState<string>('')
	const { carrinho } = useCarrinho()
	const [ carrinhoQuantidade, setCarrinhoQuantidade ] = useState<number>(0) 
	const [dropdown, setDropdown] = useState<boolean>(false)
	
	const alterarDropdown = () => {
		setDropdown(!dropdown)	
	}

	useEffect(()=>{
		let quantidade = 0
		carrinho.forEach((cart)=>{
			quantidade += cart.quantidade
		})
		setCarrinhoQuantidade(quantidade)

	},[carrinho])

	const buscar = () =>{
		if(inputValue && inputValue.length >= 2)	{
			setInputValue('')
			router.push('/produto/buscar/' + inputValue)
		}
	} 
	
	const deslogar = ()=>{
		authSair()
		setDropdown(false)
		router.push('/login')
	}

	const logar = () =>{
		alterarDropdown()
		router.push('/login')
	}

	
	return(
		<div className='flex flex-col bg-blue-600  border-b-4 border-orange-500 '>
			<div className="flex flex-row  p-2 items-center text-gray-200 md:space-x-14  ">
				<div className="hidden  md:flex md:pl-2 ">
					<Link href="/">
						<h1 className="cursor-pointer font-bold text-3xl flex">PENSE <span className='text-orange-500'>APP</span></h1>

					</Link>
				</div>

				<button 
					className="flex md:hidden items-center p-2 mr-2 rounded-md font-bold text-gray-200"
					onClick={()=>{
						alterarDropdown()
					}}
				>
		
					{
						dropdown? 				
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor " className="w-5 h-5 ">
								<path fillRule="evenodd" d="M4.28 3.22a.75.75 0 00-1.06 1.06L8.94 10l-5.72 5.72a.75.75 0 101.06 1.06L10 11.06l5.72 5.72a.75.75 0 101.06-1.06L11.06 10l5.72-5.72a.75.75 0 00-1.06-1.06L10 8.94 4.28 3.22z" clipRule="evenodd" />
							</svg>	
							:

							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
								<path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
							</svg>


					}

				</button>

				<div className="text-black basis-full pr-4 flex  justify-center space-x-1">
					<input 
						type="text" 
						className="p-2 w-full rounded  border-gray-200 shadow-lg max-w-xl"
						placeholder="Busque aqui"
						value={inputValue}
						onChange={e=>{
							setInputValue(e.target.value)
						}}
						onKeyDown={e=>{
							if(e.key === 'Enter') buscar()
						}}
					></input>
					<button onClick={buscar} className="bg-orange-500 hover:bg-orange-600 transition rounded p-3 shadow-lg hidden  md:flex text-white">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
						</svg>
					</button>
				</div>

				<div className="flex md:space-x-4 items-center flex-row pr-0">
					<div className="hidden md:flex">
						{
							!isAuth? 
								<div className="flex flex-col w-32 text-sm" >
									<span>Faça <Link href="/login" ><span  className='font-bold cursor-pointer underline'>Login</span></Link> ou </span>
									<span>crie seu <Link href="/login"><span className='font-bold cursor-pointer underline'>Cadastro</span></Link></span>
								</div> :
								<>
									<div className='hidden md:visible  md:w-36 md:flex flex-col '>
										<span>Olá {usuario.nome.split(' ')[0]}</span>
										<span className="font-bold cursor-pointer hover:underline" onClick={deslogar}>SAIR</span>
									</div>					
									<div className="hidden sm:flex flex-col pr-4 md:pr-8">
										<Link href="/listadesejos">
											<button className="py-4 px-1 relative rounded-full" aria-label="Cart">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
												</svg>
											</button>

										</Link>
									</div>
								</>

						}
					</div>

					<div className="flex flex-col pr-4 md:pr-8">
						<Link href="/carrinho">
							<button className="py-4 px-1 relative rounded-full" aria-label="Cart">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" className="w-6 h-6">
									<path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
								</svg>
								<span className="absolute inset-0 object-right-top -mr-6">
									<div className="inline-flex items-center w-6 justify-center px-1.5 py-1 rounded-full text-sm font-semibold leading-4 bg-red-500 text-white">
										{carrinhoQuantidade}
									</div>
								</span>
							</button>

						</Link>
					</div>
					
				</div>               

			</div>
			<div id="dropdown" className={`${dropdown? 'flex' : 'hidden'} md:hidden flex-col p-2 space-y-4`}>
				<div>
					<h1 className='text-gray-100 font-bold text-2xl pl-1 '>Olá. { isAuth? `${usuario.nome.split(' ')[0]}`:'Faça o seu login' }</h1>
				</div>
				<ul className="py-1 space-y-2 text-sm text-gray-200" aria-labelledby="dropdownDefault">
					
					{
						isAuth ?
							<li>
								<a href="/listadesejos" className="flex space-x-2 p-3 bg-blue-500 px-2 rounded-sm font-bold   ">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
										<path d="M9.693 17.934l-.003-.001-.006-.003-.021-.01a8.112 8.112 0 01-.355-.172 20.748 20.748 0 01-3.917-2.592C3.266 13.361 1 10.608 1 7a5 5 0 019-3 5 5 0 019 3c0 3.608-2.266 6.361-4.39 8.156a20.745 20.745 0 01-4.196 2.729 7.809 7.809 0 01-.077.035l-.021.01-.006.003-.002.001a.766.766 0 01-.615 0z" />
									</svg>
									<span>
								Lista de desejos
									</span>
								</a>
							</li>:
							<></>
					}


					<li>
						<a href="https://github.com/matheus55391" target='_blank' className='flex space-x-2 p-3 bg-blue-500 px-2 rounded-sm font-bold' rel="noreferrer">

							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
							</svg>

							<span>
								GITHUB
							</span>
						</a>
					</li>

				</ul>
				{
					isAuth?
						<button 
							onClick={()=>{
								deslogar()
							}}
							className="flex space-x-2  w-full h-12 items-center justify-center bg-orange-500 rounded py-2 font-bold border-2  border-orange-500  text-white p-4 ">
							<span className='text-lg' >SAIR</span>
						</button>
						: 
						<button 
							onClick={logar}
							className="flex space-x-2  w-full h-12 items-center justify-center bg-orange-500 rounded py-2 font-bold border-2  border-orange-500  text-white p-4 ">
							<span className='text-lg' >LOGIN</span>
						</button>
				}
			</div>			
		</div>

	)
}