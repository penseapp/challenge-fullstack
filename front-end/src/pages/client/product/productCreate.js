import React, { useState } from "react";
import "../home/home.css";
import api from "../../../api/api";

function ProductCreate() {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  async function handleSubmit() {
    const data = { nameProduct: nameProduct, priceProduct: priceProduct };

    if (nameProduct !== "" && priceProduct !== "") {
      const response = await api.post("/api/product", data);

      if (response.status === 200) {
        window.location.href = "/homeUser";
      } else {
        alert("erro");
      }
    } else {
      alert("Preencha todos os dados!");
    }
  }

  return (
    <>
      <div className="productContainer">
        <div className="product">
          <h2 className="productTitle">Criar Produto</h2>
          <p className="productSubtitle">Nome do Produto</p>
          <input
            className="productInput"
            type="text"
            placeholder="nome do produto..."
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
          <p className="productSubtitle">Preço</p>
          <input
            className="productInput"
            type="text"
            placeholder="preoço do produto..."
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
          />
          <br />
          <button className="productButton" onClick={handleSubmit}>
            criar
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCreate;
