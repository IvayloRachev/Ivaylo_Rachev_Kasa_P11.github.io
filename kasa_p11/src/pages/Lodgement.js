import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import lodgements from '../data/data';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import Rating from '../components/Rating';

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
            <section className='lodgement-carousel'>
                <Gallery images={pictures} title={title}/>
            </section>
            <section className='lodgement-meta'>
                <div className='lodgement-meta-part-1'>
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div className='lodgement-meta-part-1-tags'>
                        {tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className='lodgement-meta-part-2'>
                    <div className='lodgement-meta-part-2-host'>
                        <img src={host.picture} className='lodgement-meta-part-2-host-image' alt="Profil du proprietaire" />
                        <p className='lodgement-meta-part-2-host-name'>{host.name}</p>
                    </div>
                    <div className='lodgement-meta-part-2-rating'>
                        <Rating rating={rating}/>
                    </div>
                </div>
            </section>
            <section className='lodgement-content'>
                <Collapse title="Description"
                          content={description}
                          classArticle="lodgement-content-dropdown"
                          classTitle="lodgement-content-dropdown-title"
                          classContent="lodgement-content-dropdown-content"/>
                <Collapse title="Equipments"
                          content={equipments.map((element, index) => (<span key={index}>{element}</span>))}
                          classArticle="lodgement-content-dropdown"
                          classTitle="lodgement-content-dropdown-title"
                          classContent="lodgement-content-dropdown-content"/>
            </section>
        </div>
    )
}

export default Lodgement;