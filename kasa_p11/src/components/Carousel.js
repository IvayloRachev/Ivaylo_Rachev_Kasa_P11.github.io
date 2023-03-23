import React from 'react';
import {useState} from "react";
import * as PropTypes from 'prop-types';
import CarouselArrowLeft from '../assets/carousel-arrow-left.svg';
import CarouselArrowRight from '../assets/carousel-arrow-right.svg';

function Carousel({images, title}) {
    let [currentImage, setCurrentImage] = useState(0);
    let numberOfImages = images.legth;

    return (
        <div>
            {images.map((image, index) => {
                return (
                    <div key={index} className='lodgement-carousel-image-wrapper'>
                        {index === currentImage && (
                            <div>
                                <img src={image} alt={`${title} (${index +1} of ${numberOfImages}`} className="lodgement-carousel-image"/>
                                <p className='lodgement-carousel-counter'>{index +1}/{numberOfImages}</p>
                            </div>
                        )}
                    </div>
                )
            })}
            {numberOfImages > 1 ? (
                <div className='lodgement-carousel-arrow-wrapper'>
                    <img src={CarouselArrowLeft} alt="Flêche gauche du carousel" onClick={previousImage} className="lodgement-carousel-arrow lodgement-carousel-arrow_left"/>
                    <img src={CarouselArrowRight} alt="Flêche droite du carousel" onClick={nextImage} className="lodgement-carousel-arrow lodgement-carousel-arrow_right"/>
                </div>
            ) : (null)}
        </div>
    );

    function nextImage() {
        setCurrentImage(currentImage === numberOfImages - 1 ? 0 : currentImage + 1);
    }

    function previousImage() {
        setCurrentImage(currentImage === 0 ? numberOfImages -1 : currentImage - 1);
    }
}

Carousel.propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
};

export default Carousel;