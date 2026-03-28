import React from "react";
import "./Home.scss";
import logements from "../../data/logements.json";
import { GalleryCard, type CardData } from "../../components/galleryCard/GalleryCard";



export const Home:React.FC = () => {

    return (
        <>
        <section className="tagline">
        <p>Chez vous, partout et ailleurs</p>
        </section>
        <section className="gallery">
            {logements.map((cardDataParent :CardData) =>(
                <GalleryCard key={cardDataParent.id} cardData={cardDataParent} />
            ))

            }
        </section>
        </>
    )
}