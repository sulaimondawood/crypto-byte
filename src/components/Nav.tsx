import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Nav.css";
import "../features/cryptoApi";
import { NavLink } from "react-router-dom";
const Nav: React.FunctionComponent = () => {
  return (
    <>
      <section className="nav-section">
        <aside className="nav">
          <nav className="nav-wrapper">
            <h1>
              Crypto <span>Byte</span>
            </h1>
            <div className="nav-links-container">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/exhanges">
                Exchanges
              </NavLink>
              <NavLink className="nav-link" to="/cryptocurrencies">
                Cryptocurrencies
              </NavLink>
              <NavLink className="nav-link" to="/news">
                News
              </NavLink>
            </div>
          </nav>
        </aside>
        <aside className="crypto-news"></aside>

        <div>
          <div className="outlet">
            <Outlet />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Nav;
