import React from "react";
import { Link } from 'react-router-dom'

import { FaColumns, FaSignInAlt } from "react-icons/fa";

import "./Header.css";

function Header() {
  return (
    <header className="px-10 flex justify-between items-center py-5">
      <a className="text-white">Pagina de Login</a>
      <div className="text-white p-5 bg-opacity-50 rounded-sm mx-5 flex items-center ">
        <Link to="/register" className="headerLink p-4 mr-1 flex items-center"><FaColumns className="mr-2" />Register</Link>
        <Link to="/login" className="headerLink p-4 mr-1 flex items-center"><FaSignInAlt className="mr-2" />Login</Link>
      </div>
    </header>
  );
}

export default Header;
