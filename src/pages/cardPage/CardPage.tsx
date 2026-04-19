import React from "react";
import { Navigate, useParams } from "react-router-dom";
import cardsData from "../../data/logements.json";
import type { CardData } from "../../components/galleryCard/GalleryCard";
import { Carrousel } from "../../components/carrousel/Carrousel";
import "./CardPage.scss";
import { Collapse } from "../../components/collapse/Collapse";


export const CardPage: React.FC = () => {
    const { id } = useParams();
    const dataGroup = (cardsData as CardData[]).find(card => card.id === id);
    if (!dataGroup) {
        return <Navigate to={""} />
    }
    return (
        <div className="housing-section">
            <Carrousel id={id} />
            <div className="housing-info">
                {/* Dans la première section on récupère le titre, la localisation et les tags pour remplir notre template */}

                <div className='title-and-location'>
                    <h2>{dataGroup.title}</h2>
                    <p>{dataGroup.location}</p>
                </div>
                <div className='tags'>
                    {dataGroup.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div>

                {/* Ici on affiche le nom de l'hôte, sa photo de profil et le système de notation par étoiles avec une expression ternaire */}

                <div className='host-section'>
                    <div className='stars-rating'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <i
                                key={index}
                                className={`fa-solid fa-star ${index < + dataGroup.rating ? 'active-star' : 'disabled-star'}`}
                            >
                            </i>
                        ))}
                    </div>
                    <div className="host-info">
                        <p>{dataGroup.host.name}</p>
                        <img src={dataGroup.host.picture} alt="Photo de profil de l'hôte" />
                    </div>
                </div>
            </div>
            {/* In the last section we call our Collapse Components with description and equipments list from dataGroup */}
            <div className='collapse-section'>
                <Collapse
                    title="Description"
                    content={dataGroup.description}
                />
                <Collapse
                    title="Équipement"
                    content={dataGroup.equipments.map((equipment, index) => (<span key={index}>{equipment}</span>))}
                />
            </div>
        </div>)
}