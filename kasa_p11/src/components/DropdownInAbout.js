import React from 'react';
import {useState} from 'react';
import DropdownArrowUp from '../assets/dropdown-arrow-up.svg';
import DropdownArrowDown from '../assets/dropdown-arrow.svg';

function DropdownInAbout({title, content, class_1 = null, class_2 = null, class_3 = null}) {
    const [display, setDisplay] = useState("none");

    return (
        <article className={`${class_1}`}>
            <div className={`${class_2}`} onClick={swapDisplay}>
                <h2>{title}</h2>
                {display === "none" ?
                    (<img src={DropdownArrowUp} alt="Arrow up"/>) :
                    (<img src={DropdownArrowDown} alt="Arrow down"/>)
                }
            </div>
            <div className={`${class_3}`} style={{display: display}}>
                <p>{content}</p>
            </div>
        </article>
    );

    function swapDisplay() {
        if (display === "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }
}

export default DropdownInAbout;