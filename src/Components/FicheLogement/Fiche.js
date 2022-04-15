import { useParams } from 'react-router-dom';
import data from '../../data.json';
import Navbar from '../Header/Navbar/Navbar';
import Lightbox from '../LightBox/Lightbox';
import Accordion from '../Accordion/Accordion'
import Footer from '../Footer/Footer';
import PositiveStar from '../../assets/positive-star.svg';
import NegativeStar from '../../assets/negative-star.svg'
import './fiche.css'

function Fiche() {
  const params = useParams()
  const itemData = data.find((item) => item.id === params.id)

  let ranking = []
  let badRanking = []
  let numberStar = parseInt(itemData.rating)
  let emptyStar = 5 - numberStar
   
  for(let i = 0; i < numberStar; i++) {    
    ranking.push(<img src={PositiveStar} alt="positive-star"/>)
    }  
  for(let i = 0; i < emptyStar; i++) { 
    badRanking.push(<img src={NegativeStar} alt="negative-star"/>)
  }

  return (
    <>
      <Navbar/>
      <main>
        <Lightbox images = {itemData.pictures}></Lightbox>
        <section className='fiche-container'>
          <section className='fiche'>
            <section className='info'>
              <div>
                <h3 className='location-title'> {itemData.title} </h3>
                <h4 className='location'> {itemData.location} </h4>
              </div>
              <div className='tag-container'>
                {itemData.tags.map((tag, index) => {
                  return <div key={index} className='tag'> {tag}</div>
                })}      
              </div>     
            </section>
            <section className='picture_and_stars'>
              <div className='star'> 
                {ranking.map((rank, index) => {
                  return <div key ={index}> {rank}</div>
                })}
                {badRanking.map((rank, index) => {
                  return <div key ={index}> {rank}</div>
                })}
              </div>
              <div className='location-owner'>
                <p className='owner-name'> { itemData.host.name} </p>
                <img className='owner-picture' src={ itemData.host.picture} alt="owner"/>       
              </div> 
            </section>
          </section>       
        <section className='description'>
        <div className='accordion-description'>
          <Accordion class = {"accordion-fiche"}
                     custom = {"fiche-accordion-title"}
                     animated = {"fiche-animated"}
                     toggle = {"fiche-toggle"}
                     title={"Description"}
                     txt={itemData.description}
          />
        </div>   
        <div className='accordion-description'>
          <Accordion class = {"accordion-fiche"}
                     custom = {"fiche-accordion-title"}
                     animated = {"fiche-animated"}
                     toggle = {"fiche-toggle"}
                     title={"Equipements"}
                     txt={itemData.equipments.map((equipment,index) => {
              return <li key={index} className='equipment'>{equipment}</li>
            })}
          />
        </div> 
      </section> 
      </section> 
      </main>
      <Footer/>
    </>
  )
}
export default Fiche