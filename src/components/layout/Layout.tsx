import React, { type ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "./Layout.scss";

interface LayoutProps {
    children:ReactNode
}

export const Layout:React.FC<LayoutProps> = ({children}) => {

    return (
        <div className="container">
        <Header />
        <main className="main">{children}</main>
        <Footer />
        </div>
    )
}