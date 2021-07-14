import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Home from "../pages/Users/Home/Home"

function PrivateRoute({user, admin, Component, ...args}) {

  console.log(user, admin, isAuthenticated())

  return <Route {...args} render={() => {
    if(user) {
      if(isAuthenticated()) {
        return <Component />
      } else {
        return <Redirect to="/login" />
      }
    }
  }} />
}

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute user exact path="/" Component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/*<Redirect from="/" to="/login" />*/}
    </Switch>
  );
};

export default Routes;
