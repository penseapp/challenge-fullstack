import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ListaProdutos } from '../../../components/ListaProdutos'
import { Produto } from '../../../interfaces/Produto'
import urlFiltro from '../../../utils/UrlFiltro'
import styles from '../../../styles/listaProdutos.module.css'

const Buscar: NextPage = () => {
	const router = useRouter()
	const [listaProdutos, setListaProdutos] = useState<Produto[]>([])

	useEffect(()=>{
		let { nome, ordem } = router.query
		if (Array.isArray(nome)) {
			nome = nome.join('')
		}
		if (Array.isArray(ordem)) {
			ordem = ordem.join('')
		}
		if(nome){
			const url : string = urlFiltro(nome, ordem)        
			buscarProdutos(url)
		}
	},[router.isReady, router.replace ])

	const buscarProdutos = async (url: string) =>{
		const response = await axios.get(url)
		const data = response.data
		setListaProdutos(data)

	}
	
	const urlNomeParam = () =>{
		let {nome}= router.query
		if (Array.isArray(nome)) {
			nome = nome.join('')
		}
		return nome
	}

	const ordenar = (filtro: string) =>{

		const queryNome = urlNomeParam()
		router.push({
			pathname: '/produto/buscar/' + queryNome,
			query: { ordem: encodeURI(filtro) }
		})
	}


	return(
		<div className="flex flex-col justify-center px-1 sm:px-16   xl:px-62">
			<div className={styles.header} >

				<div className={styles.listaProdutosBox}>
					<div className={styles.tituloBox} >
						<h1 className={styles.titulo}>PRODUTOS📦</h1>
					</div>
					<div className={styles.filtroBox}>
						<div className={styles.ordenarIcone}>
							<svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
							</svg>
						</div>
						<label className={styles.ordenarText}>Filtrar:</label>
						<div className={styles.ordenarListaBox}>
							<select 
								className={styles.ordenarLista} 
								aria-label="Escolha"
								defaultValue={'DEFAULT'}
								onChange={(e)=>{
									ordenar(e.target.value)
								}}
							>
								<option value="DEFAULT">Escolha</option>
								<option value="asc">Preço crescente</option>
								<option value="desc">Preço decrescente</option>
								<option value="alf">Alfabetica</option>
								<option value="promo">Promoções</option>
							</select>
						</div>
					</div>

				</div>
			</div>
			<div className={styles.line}/>
			<ListaProdutos listaProdutos={listaProdutos} />

		</div>
	)
}

export default Buscar