import React from "react";
import "./Header.scss";
import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";



export const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <NavLink to="/" className={(nav)=> (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
        <NavLink to="/about" className={(nav)=> (nav.isActive ? "nav-active" : "")}>À propos</NavLink>
      </nav>
    </header>
  );
};