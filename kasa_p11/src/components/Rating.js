import React from 'react';
import * as PropTypes from 'prop-types';
import StarFilled from '../assets/star-filled.svg';
import StarEmpty from "../assets/star-empty.svg";

function Rating({rating}) {
    const maxRating = 5;
    return (
        <div>
            {Array.from({length: rating}, (element, index) => 
                <img key={index} src={StarFilled} alt="Etoile pleine pour les avis"/>)}
            {Array.from({length: maxRating - rating}, (element, index) =>
                <img key={index} src={StarEmpty} alt="Etoile vide pour les avis"/>)}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.string,
};

export default Rating;