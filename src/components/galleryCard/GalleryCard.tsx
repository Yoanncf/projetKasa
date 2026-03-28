import React from "react";
import { NavLink } from "react-router-dom";
import "./GalleryCard.scss";



export interface CardData {

    id:string,
    title:string,
    cover:string,
    pictures:string[],
    description:string,
    host:{
        name:string,
        picture:string
    },
    rating:string,
    location:string,
    equipments:string[],
    tags:string[],
}

interface GalleryCardProps {
    cardData: CardData;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ cardData }) => {

    return (
        <NavLink to={`/card/${cardData.id}`}>
        <div className="card">
            <img src={cardData.cover} alt={cardData.title} />
            <h2>{cardData.title}</h2>
        </div>
        </NavLink>
    )
}