import React from "react";
import "./Banner.scss";

interface BannerProps {
    image: string;     // image importée, passée en props
    title?: string;    // titre optionnel (absent sur la page À propos)
}

export const Banner: React.FC<BannerProps> = ({ image, title }) => {
    return (
        <section className="banner" style={{ backgroundImage: `url(${image})` }}>
            {title && <h1>{title}</h1>}
        </section>
    );
};
