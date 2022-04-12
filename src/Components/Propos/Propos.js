import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Accordion from '../Accordion/Accordion'

function Propos() {
  return (
    <>
      <Header/>
        <main>
          <Accordion title={"Fiabilité"} 
                     txt ={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."} />
          <Accordion title={"Respect"} 
                     txt ={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
          <Accordion title={"Service"} 
                     txt ={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
          <Accordion title={"Sécurité"} 
                     txt ={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
        </main>
      <Footer/>
    </>
  )
}

export default Propos