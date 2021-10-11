import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import api from "../../../api/api";
import ProductCreate from "../product/productCreate";

function HomeUser() {
  //List all products
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const {
      data: { products },
    } = await api.get("/api/product");
    setProducts(products);
  };

  useEffect(() => {
    getProduct();
  }, []);

  //Delete Product
  async function handleDelete(id) {
    if (window.confirm("Deseja remover esse produto?")) {
      var resultDelete = await api.delete("/api/product/" + id);
      if (resultDelete.status === 200) {
        window.location.href = "/homeUser";
      } else {
        alert("Erro, tente novamente!");
      }
    }
  }

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="listContainer">
            <h1 className="listTitle">PenseStore</h1>
            <div className="pageSeparator"></div>
            <div className="sidebarMenu">
              <ul className="menu">
                <li className="menuItem">
                  <Link to="/user/wishlist" className="active">
                    Wishlist
                  </Link>
                </li>
                <li className="menuItem">
                  <Link to="/" className="active">
                    sair
                  </Link>
                </li>
              </ul>
            </div>
            <br />
            <div className="pageSeparator"></div>
            <ProductCreate />
          </div>
        </div>
      </div>
      <div className="gridCards">
        {products.map((prod) => (
          <div className="cards">
            <div className="listContent">
              <div className="listCard">
                <h2 className="titleCard">{prod.nameProduct}</h2>
                <div className="cardBox">
                  <p className="cardPrice">R$ {prod.priceProduct}</p>
                </div>
                <ul>
                  <li className="menuItem">
                    <button className="cardButton">Adicionar</button>
                  </li>
                  <li className="menuItem">
                    <button
                      className="cardButton"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/product/update/${prod._id}`;
                      }}
                    >
                      Atualizar
                    </button>
                  </li>
                  <li className="menuItem">
                    <button
                      className="cardButton"
                      onClick={() => handleDelete(prod._id)}
                    >
                      Remover
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeUser;
