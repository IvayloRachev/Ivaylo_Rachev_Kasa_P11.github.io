import React from 'react';
import HeroImage from '../assets/hero-about.jpg';
import Collapse from '../components/Collapse';

function About() {
    return (
        <div className='about'>
            <section className='about-hero'>
                <img src={HeroImage} alt="Hero" className='about-hero-image' />
                <h1 className='about-hero-text'> </h1>
            </section>
            <section className='about-content'>
                <Collapse title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        classArticle="about-content-dropdown"
                        classTitle="about-content-dropdown-title"
                        classContent="about-content-dropdown-content" />
                <Collapse title="Respect"
                        content="La bienveillanvce fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                        classArticle="about-content-dropdown"
                        classTitle="about-content-dropdown-title"
                        classContent="about-content-dropdown-content" />
                <Collapse title="Service" 
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                        classArticle="about-content-dropdown"
                        classTitle="about-content-dropdown-title"
                        classContent="about-content-dropdown-content" />
                <Collapse title="Sécurité" 
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité ébablis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                        classArticle="about-content-dropdown"
                        classTitle="about-content-dropdown-title"
                        classContent="about-content-dropdown-content" />
            </section>
        </div>
    )
}

export default About;