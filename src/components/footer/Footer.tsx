import React from "react";
import logo from "../../assets/LOGO.png";
import "./Footer.scss";

export const Footer:React.FC = () => {

    return (
        <footer className="footer">
            <img src={logo} alt="Logo Kasa" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}