import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Accordion from '../../Components/Accordion/Accordion';
import './propos.css';

function Propos() {
  return (
    <>
      <Header/>
        <section className='propos-container'>
          <Accordion class={"accordion-propos"}
                     toggle={"propos-toggle"}
                     animated={"propos-animated"}
                     custom={"accordion-visible"}
                     title={"Fiabilité"}
                     paragraphe={"propos-toggle-text"} 
                     txt ={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."} />
          <Accordion toggle={"propos-toggle"}
                     animated={"propos-animated"}
                     class={"accordion-propos"}
                     custom={"accordion-visible"}
                     title={"Respect"} 
                     paragraphe={"propos-toggle-text"} 
                     txt ={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
          <Accordion toggle={"propos-toggle"}
                     animated={"propos-animated"}
                     class={"accordion-propos"}
                     custom={"accordion-visible"}
                     title={"Service"} 
                     paragraphe={"propos-toggle-text"} 
                     txt ={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
          <Accordion toggle={"propos-toggle"}
                     animated={"propos-animated"}
                     class={"accordion-propos"}
                     custom={"accordion-visible"}
                     title={"Sécurité"} 
                     paragraphe={"propos-toggle-text"} 
                     txt ={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
        </section>
      <Footer/>
    </>
  )
}

export default Propos