import React, { useState, useEffect } from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import { useParams } from "react-router-dom";

function ProductUpdate() {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  const { idProduto } = useParams();

  useEffect(() => {
    async function getProduct() {
      var response = await api.get("/api/product/" + idProduto);

      setNameProduct(response.data.product.nameProduct);
      setPriceProduct(response.data.product.priceProduct);
    }

    getProduct();
  }, []);

  async function handleSubmit() {
    const data = { nameProduct: nameProduct, priceProduct: priceProduct };

    if (nameProduct !== "" && priceProduct !== "") {
      const responsePut = await api.put("/api/product/" + idProduto, data);

      if (responsePut.status === 200) {
        window.location.href = "/homeUser";
      } else {
        alert("erro");
      }
    } else {
      alert("Preencha todos os dados!");
    }
  }

  return (
    <div className="container">
      <div className="loginForm">
        <h1 className="title">Atualização de Produto</h1>
        <p class="inputTitle">Nome do Produto</p>
        <input
          class="input"
          type="text"
          placeholder="name of product..."
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
        />
        <p class="inputTitle">Preço do Produto</p>
        <input
          class="input"
          type="text"
          placeholder="price of product..."
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
        <br />
        <Link to="/homeUser" className="LinkHome">
          Home
        </Link>
        <button class="button" onClick={handleSubmit}>
          Atualizar
        </button>
      </div>
    </div>
  );
}

export default ProductUpdate;
