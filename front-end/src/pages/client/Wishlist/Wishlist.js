import React from "react";
import { Link } from "react-router-dom";
import "../home/home.css";

function Wishlist() {
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="listContainer">
            <h1 className="listTitle">Your Wish List</h1>
            <div className="pageSeparator"></div>
            <div className="sidebarMenu">
              <ul className="menu">
                <li className="menuItem">
                  <Link to="/homeUser" className="active">
                    home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
