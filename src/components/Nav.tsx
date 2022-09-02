import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Nav.css";
import "../features/cryptoApi";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Nav: React.FunctionComponent = () => {
  // const smallWidth = window.innerWidth;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <section className="nav-section">
        <aside className="nav">
          <nav className="nav-wrapper">
            <div className="logo">
              <h1>
                Crypto <span>Byte</span>
              </h1>
              <FaBars
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="toggle-menu"
              />
            </div>

            <div
              className={
                isMenuOpen
                  ? "show-menu nav-links-container"
                  : "nav-links-container"
              }
            >
              <NavLink
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="nav-link"
                to="/exhanges"
              >
                Exchanges
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="nav-link"
                to="/cryptocurrencies"
              >
                Cryptocurrencies
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="nav-link"
                to="/news"
              >
                News
              </NavLink>
            </div>
          </nav>
          {/* <div className="mobile-nav">
            <h1>
              Crypto <span>Byte</span>
            </h1>
            <div className="mobile-nav-links-container">
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
          </div> */}
        </aside>
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
