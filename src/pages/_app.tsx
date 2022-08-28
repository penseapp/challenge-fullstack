import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { AuthProvider } from '../contexts/AuthContext'
import { CarrinhoProvider } from '../contexts/CarrinhoContext'

function MyApp({ Component, pageProps }: AppProps) {
	return(


		<AuthProvider>
			<CarrinhoProvider>

				<AuthProvider>

					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AuthProvider>
			</CarrinhoProvider>

		</AuthProvider>

	) 
}

export default MyApp
