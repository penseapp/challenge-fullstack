export default function urlFiltro (nome: string, ordem?: string){
	let url = `?nome=${nome}`
	if(ordem){
		url = url + `&ordem=${ordem}`
	}

	return url
}