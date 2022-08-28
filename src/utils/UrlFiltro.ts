export default function urlFiltro (nome: string, ordem?: string){
	let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/produtos?nome=${nome}`
	if(ordem){
		url = url + `&ordem=${ordem}`
	}

	return url
}