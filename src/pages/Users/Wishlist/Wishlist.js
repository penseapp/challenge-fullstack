import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import api from "../../../api/request";

import { getInfos } from "../../../services/auth"

export default function Home() {
  const [products, setProducts] = useState([])

  const fetchWishlist = async () => {
    const user = JSON.parse(getInfos())

    const response = await api.get(`/wishlist/${user.wishlist_id}`)

    setProducts(response.data.products)
  }
  
  const handleRemoveProductInWishlist = async (product_id) => {
    const user = JSON.parse(getInfos())

    await api.delete(`/wishlist/removeProduct/${user.wishlist_id}/${product_id}`)

    fetchWishlist()
  }

  useEffect(() => {
    fetchWishlist()
  }, [])

  return (
    <div className="p-4">
      <header className="flex">
        <h1>Lista de Desejos</h1>
        <Link className="ml-8 p-4 border rounded-lg" to="/">Todos os Produtos</Link>
      </header>
      <div className="mt-4">
        {products?.map((product) => {
          return (
            <div key={product.id}>
              <div className="py-4 justify-between flex">
                <div className="flex justify-between" style={{
                    width: "700px"
                  }}>
                  <div className="px-2">
                    <h1 className="">Nome: {product.name}</h1>
                    <h2>Descrição: {product.description}</h2>
                    <h2>Preço: {product.price}</h2>
                  </div>
                  <button className="p-4 border rounded-lg" onClick={() => handleRemoveProductInWishlist(product.id)}>Remover da Lista de Deseja</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
