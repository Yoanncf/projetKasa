import React from "react";
import "./Error.scss";
import { NavLink } from "react-router-dom";






export const Error: React.FC = () => {

    return (
        <>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">
                <p className="return-link">Retourner sur la page d’accueil</p>
            </NavLink>
        </>
    )
}