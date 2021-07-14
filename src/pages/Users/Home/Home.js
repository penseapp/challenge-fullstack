import React, { useState, useEffect } from "react";

import api from "../../../api/request";

export default function Home() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await api.get('/products/')

    setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Produtos</h1>
      {products?.map((a) => {
        return (
          <div>
            {a.id}
          </div>
        )
      })}
      
    </div>
  )
}
