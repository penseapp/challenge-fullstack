import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

import api from '../../api/request';

import { BiFace } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { login } from "../../services/auth";

import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = {
      name,
      email,
      password
    };

    const { data } = await api.post('/register', user);

    await login(data.token, data.user);

    history.push('/');
  }

  return (
    <div className="registerPage h-screen">
      <Header />

      <div className="registerContainer">
        <div className="registerGrid">
          <div className="registerItem">
            <form>
              <div className="registerFlex">
                <div className="register-header">
                  <h4>Register</h4>
                </div>
                <div className="register-form">
                  <Input value={name} setValue={setName} placeholder="Seu nome" Icon={BiFace} />
                  <Input value={email} setValue={setEmail} placeholder="Seu email" Icon={MdEmail} />
                  <Input value={password} setValue={setPassword} placeholder="Sua senha" Icon={RiLockPasswordLine} />
                </div>
                <div className="">
                  <button className="p-10 text-lg" onClick={handleSubmit} style={{
                    color: "#e91e63",
                  }}>
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
