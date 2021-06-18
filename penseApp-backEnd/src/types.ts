export const userTableName = "penseapp_tb_users"
export const productsTableName = "penseapp_tb_products"

export type authenticationData = {
    id: string
}

export type store = {
    id: string
    name: string
    description: string
}

export type user = {
    id: string
    name: string
    email: string
    password:string

}

export type product = {
    id: string
    name: string
    description: string
    price: number
    promoPrice: boolean
    statusFlag: string
    category: string
    createdAt: string
}

