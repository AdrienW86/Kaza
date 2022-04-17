import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Card from './Card/Card';
import Footer from '../Footer/Footer';
import data from '../../data.json';

function Home() {
  const [myData, setData] = useState([])
  const getData = () => {
    setData(data)
  }

  useEffect(() => {
    getData()
  },[])
  
  return (
    <>  
      <Header/>
          <div className='list-card'>        
            {myData.map((item, index) => (           
              <Card    
                className='card'  
                key= {index}
                title= {item.title}
                cover = {item.cover}
                id = {item.id}
              />
            ))} 
          </div>             
      <Footer/>        
    </>
  )
}
export default Home