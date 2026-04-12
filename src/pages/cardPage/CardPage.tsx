import React from "react";
import { useParams } from "react-router-dom";
import cardsData from "../../data/logements.json";
import type { CardData } from "../../components/galleryCard/GalleryCard";
import { Carrousel } from "../../components/carrousel/Carrousel";
import "./CardPage.scss";


export const CardPage: React.FC = () => {
    const {id} = useParams();
    const dataGroup = (cardsData as CardData[]).find(card => card.id === id);

    return (
    <div className="housing-section">
        <Carrousel id={id} />
    </div>)
}