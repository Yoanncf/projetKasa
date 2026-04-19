import React, { useRef, useState, type ReactNode } from "react";
import "./Collapse.scss";



interface CollapseProps {

    title: string,
    content: ReactNode,

}

export const Collapse: React.FC<CollapseProps> = ({ title, content }) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [divHeight, setDivHeight] = useState(5.5);
    const pRef = useRef<HTMLParagraphElement | null>(null);

    const toggleCollapse = () => {

        setIsActive(!isActive)
        if (!isActive) {
            setDivHeight(((pRef.current?.offsetHeight || 0) / window.innerHeight) * 100 + 5)
        } else {
            setDivHeight(5.5)
        }
    }

    return (
        <div className={`collapse-element ${isActive ? "active" : ""}`} style={{ height: `${divHeight}vh` }}>
            <h3>
                {/* on <i> click, we call the function toggleCollapse */}
                {title} <i onClick={toggleCollapse} className='fa-solid fa-chevron-up'></i>
            </h3>
            <p ref={pRef}>{content}</p> {/* ref="" we use this attribute to call a ref from the DOM */}
        </div>
    )
}