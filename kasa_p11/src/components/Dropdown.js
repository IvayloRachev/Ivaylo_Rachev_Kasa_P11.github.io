import React from 'react';
import {useState} from 'react';
import DropdownArrow from '../assets/dropdown-arrow.svg';
import * as PropTypes from 'prop-types';

function Dropdown({title, content, classArticle, classTitle, classContent}) {
    const [displayContent, setDisplayContent] = useState("none");

    return (
        <article className={classArticle}>
            <div className={classTitle} onClick={swapDisplay}>
                <h2>{title}</h2>
                {displayContent === "none" ?
                    (<img src={DropdownArrow} alt="Arrow down"/>) :
                    (<img src={DropdownArrow} style={{transform: "rotate(180deg)"}} alt="Arrow up"/>)
                }
            </div>
            <div className={classContent} style={{display: displayContent}}>
                <p>{content}</p>
            </div>
        </article>
    );

    function swapDisplay() {
        if (displayContent === "none") {
            setDisplayContent("flex")
        } else {
            setDisplayContent("none")
        }
    }
}

Dropdown.propTypes = {
    title: PropTypes.string,
    content: PropTypes.node,
    classArticle: PropTypes.string,
    classTitle: PropTypes.string,
    classList: PropTypes.string,
};

export default Dropdown;
