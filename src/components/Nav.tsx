import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Nav.css";
import "../features/cryptoApi";
const Nav: React.FunctionComponent = () => {
  return (
    <>
      <section className="nav-section">
        <aside className="nav">
          <nav className="nav-wrapper">
            <h1>
              Crypto <span>Byte</span>
            </h1>
            <p>Home</p>
            <p>Exchanges</p>
            <p>Cryptocurrencies</p>
            <p>News</p>
          </nav>
        </aside>

        <div>
          <Outlet />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Nav;
