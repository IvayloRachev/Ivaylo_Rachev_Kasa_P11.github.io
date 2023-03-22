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
                        {}
                    </div>
                )
            })}
        </div>
    )
}