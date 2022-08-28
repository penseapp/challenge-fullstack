import { ReactNode } from 'react'
import { Navbar } from './Navbar'

type HomeLayoutProps = {
    children: ReactNode
}
export const Layout = ({ children }: HomeLayoutProps) =>{
	return(
		<div className='flex flex-col h-screen '>
			<header>
				<Navbar/>

			</header>

			<main className="grow bg-neutral-200  ">
				{children}			

			</main>
			<footer className="flex mt-auto bg-sky-600 text-white p-2 mt-auto">
				<a href="https://github.com/matheus55391" target="_blank" rel="noreferrer">@Matheus_Felipe_Vieira_Santiago</a>

			</footer>

		</div>
	)
}