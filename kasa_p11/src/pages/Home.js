import React from 'react';
import HeroImage from '../assets/hero-home.jpg';
import listings from '../data/data';
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
                    listings.map((listing) => {
                        return (
                            <article key={listing.id} className='home-cards-article'>
                                <Link to={`/listings/${listing.id}`}>
                                    <img src={listing.cover} alt={listing.title} className='home-cards-article-image' />
                                    <h2 className='home-cards-article-title'>{listing.title}</h2>
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