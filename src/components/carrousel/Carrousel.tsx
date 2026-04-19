import React, { useState } from "react";
import type { CardData } from "../galleryCard/GalleryCard";
import cardsData from "../../data/logements.json";
import "./Carrousel.scss";

interface CarrouselProps {
    id ?: string //Le composant reçois l'ID (optionel) commme props 
}

export const Carrousel: React.FC<CarrouselProps> = ({id}) => {

    const images = (cardsData as CardData[]).find(card => card.id === id )?.pictures || [];

    const [currentIndexImage, setCurrentIndexImage] = useState<number>(0);

    const nextImage = () => {
        //On utilise le modulo pour avoir la prmière image après avoire cliqué sur la fin du carrousel
        setCurrentIndexImage((currentIndexImage + 1)% images.length) 
    }

    const prevImage = () => {
        // On utilise un reverse modulo pour revenir à la dernière image lorsque nous sommes sur la première image
        setCurrentIndexImage((currentIndexImage - 1 + images.length)% images.length)
    }

    return (
    <div className="carrousel-frame">
        {images.map((imgUrl, index) => (
            <img src={imgUrl} alt="Photo Déscriptive" key={index} className={index === currentIndexImage ? "active" : "disabled"} />
        ))}

        {images.length > 1 && 
        <>
        <div className="left-right-arrows">
            <span  onClick={prevImage}><i className="fa-solid fa-chevron-left"></i></span>
            <span  onClick={nextImage}><i className="fa-solid fa-chevron-right"></i></span>
        </div>
        <p>{currentIndexImage + 1} / {images.length}</p>
        </>

        }
    </div>
    )
}