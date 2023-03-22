import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import lodgements from '../data/data';

function Lodgement() {
    let {lodgementId} = useParams();
    let lodgement = lodgements.find((lodgement) => lodgement.id === lodgementId);

    // Verification if the ID is exist
    if(lodgement === undefined) {
        return <Navigate to="/error"/>
    }

    let {pictures, title, tags, location, rating, host, equipments, description} = lodgement;
    return (
        <div className='lodgement'>
            
        </div>
    )
}

export default Lodgement;