export interface Produto {
    id:                 number   
    nome:               string
    descricao?:          string
    preco?:              number
    precoPromocional?:   number 
    flagDeStatus?:       string
    categoria?:          string
    quantidade?:         number
}