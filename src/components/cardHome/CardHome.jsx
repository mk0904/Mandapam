import React, { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import './CardHome.css';
import { GoArrowRight } from "react-icons/go";

function CardHome({ Img, Title, Desc, Reverse, buttonText }) {
    const containerRef = useRef(null);

    const handleResize = () => {
        if (containerRef.current) {
            if (window.innerWidth < 875) {
                containerRef.current.style.flexDirection = 'column';
            } else {
                containerRef.current.style.flexDirection = Reverse ? 'row-reverse' : 'row';
            }
        }
    };

    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [Reverse]);

    return (
        <div>
            <div className="Container" ref={containerRef}>
                <img
                    src={Img}
                    alt="img"
                    className="Image"
                />
                <div className="Overlay">
                    <h1 className="Text">{Title}</h1>
                    <p className="desc">{Desc}</p>
                    <Button variant="contained" className="Button">{buttonText}<GoArrowRight style={{ marginLeft: "10px" }} /></Button>
                </div>
            </div>
        </div>
    );
}

export default CardHome;
