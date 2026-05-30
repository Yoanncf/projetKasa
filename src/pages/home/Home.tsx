import React from "react";
import logements from "../../data/logements.json";
import { GalleryCard, type CardData } from "../../components/galleryCard/GalleryCard";
import { Banner } from "../../components/banner/Banner";
import bannerImg from "../../assets/Image_source_1.png";

export const Home: React.FC = () => {
    return (
        <>
            <Banner image={bannerImg} title="Chez vous, partout et ailleurs" />
            <section className="gallery">
                {logements.map((cardDataParent: CardData) => (
                    <GalleryCard key={cardDataParent.id} cardData={cardDataParent} />
                ))}
            </section>
        </>
    );
};
