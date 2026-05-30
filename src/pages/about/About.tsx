import React from "react";
import "./About.scss";
import aboutContent from "../../data/string.json";
import aboutImg from "../../assets/Image_source_2.png";
import { Collapse } from "../../components/collapse/Collapse";
import { Banner } from "../../components/banner/Banner";

export const About: React.FC = () => {
    return (
        <div>
            <Banner image={aboutImg} />
            <div className="content">
                {Object.entries(aboutContent).map(([title, content]) => (
                    <Collapse key={title} title={title} content={content} />
                ))}
            </div>
        </div>
    );
};
