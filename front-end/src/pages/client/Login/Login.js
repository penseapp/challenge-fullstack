import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import api from "../../../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const data = { email: email, password: password };

    //Cria um novo usuário
    const response = await api.post("/api/user", data);

    if (response.status === 200) {
      window.location.href = "/homeUser";
    } else {
      alert("erro ao cadastrar");
    }
  }

  return (
    <div className="container">
      <div className="loginForm">
        <h1 className="title">Login</h1>
        <p class="inputTitle">Email</p>
        <input
          class="input"
          type="text"
          placeholder="Your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p class="inputTitle">Password</p>
        <input
          class="input"
          type="password"
          placeholder="at least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Link to="/" className="LinkHome">
          Home
        </Link>
        <button class="button" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
