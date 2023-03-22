import React from 'react';
import HeroImage from '../assets/hero-home.jpg';
import lodgements from '../data/data';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <section className='home-hero'>
                <img src={HeroImage} alt='Hero' className='home-hero-image'/>
                <h1 className='home-hero-text'>Chez vous, partout et ailleurs</h1>
            </section>
            <section className='home-cards'>
                {
                    lodgements.map((lodgement) => {
                        return (
                            <article key={lodgement.id} className='home-cards-article'>
                                <Link to={`/lodgement/${lodgement.id}`}>
                                    <img src={lodgement.cover} alt={lodgement.title} className='home-cards-article-image' />
                                    <h2 className='home-cards-article-title'>{lodgement.title}</h2>
                                </Link>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Home;