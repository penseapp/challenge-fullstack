import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Client
import Home from "./pages/client/home";
import HomeUser from "./pages/client/home/homeUser";
import Login from "./pages/client/Login/Login";
import Wishlist from "./pages/client/Wishlist/Wishlist";
import ProductUpdate from "./pages/client/product/productUpdate";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/homeUser" exact component={HomeUser} />
        <Route path="/login" exact component={Login} />
        <Route path="/user/wishlist" exact component={Wishlist} />
        <Route
          path="/product/update/:idProduto"
          exact
          component={ProductUpdate}
        />
      </Switch>
    </BrowserRouter>
  );
}
