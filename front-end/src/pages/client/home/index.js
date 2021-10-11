import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
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
                  <Link to="/login" className="active">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="DashContainer"></div>
    </>
  );
}

export default Home;
