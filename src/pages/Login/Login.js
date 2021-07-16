import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

import { login } from "../../services/auth";

import api from "../../api/request";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = {
      email,
      password,
    };

    const { data } = await api.post("/login", user);

    await login(data.token, data.user);

    history.push("/");
  };

  return (
    <div className="loginPage h-screen">
      <Header />

      <div className="loginContainer">
        <div className="loginGrid">
          <div className="loginItem">
            <form>
              <div className="loginFlex">
                <div className="login-header">
                  <h4>Log in</h4>
                </div>
                <div className="login-form">
                  <Input
                    value={email}
                    setValue={setEmail}
                    placeholder="Seu email"
                    Icon={MdEmail}
                  />
                  <Input
                    value={password}
                    setValue={setPassword}
                    placeholder="Sua senha"
                    Icon={RiLockPasswordLine}
                  />
                </div>
                <div className="">
                  <button
                    className="p-10 text-lg"
                    onClick={handleSubmit}
                    style={{
                      color: "#e91e63",
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
