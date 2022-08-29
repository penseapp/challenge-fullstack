import axios from 'axios'
import { Produto } from '../interfaces/Produto'

export async function cadastarUsuario(nome: string, email: string, senha: string){

	await axios.post( process.env.NEXT_PUBLIC_BACKEND_API_URL +'/auth/cadastrar', {
		nome: nome, 
		email: email, 
		senha: senha,
	})
    
}

export async function loginUsuario(email: string, senha: string){
	const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/login', {
		email: email, senha: senha
	})
	return response.data
}

export async function validarToken(token: string){
	const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/token', {}, {headers: {'Authorization': `Bearer ${token}`}})
	return response.data

}

export async function buscarProdutosPeloId(idProduto: string){
	const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/produtos/' + idProduto)
	return response.data
}

export async function buscarProdutoFiltrado(filtro: string){
	const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/produtos` + filtro
	const response = await axios.get(url)
	return response.data
    
}

export async function buscarListaProdutosPeloId(listaIds: number[]) {
	const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/produtos?ids='+listaIds.join(',')) 
	return response.data
}



export async function buscarTodosProdutos(){
	const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/produtos')
	const produtos: Produto[] =  response.data
	return produtos
}

export async function deletarProdutoWishlist(idProduto:number, token: string){
	await axios.delete(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/wishlist/' + idProduto, {
		headers: {
			Authorization:  'Bearer ' + token
		},
	})
}

export async function  buscarWishlistUsuario(token: string){
	return await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/wishlist', { headers: { 'Authorization': 'Bearer ' + token}})
}

export async function adicionarProdutoWishlist(idProduto: number, token: string){
	await axios.post(
		process.env.NEXT_PUBLIC_BACKEND_API_URL + '/wishlist', 
		{ idProduto:  idProduto }, 
		{ headers: { 'Authorization': 'Bearer ' + token }},
	)
}