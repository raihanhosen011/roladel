import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import PortfolioCard from '../../../components/Cards/PortfolioCard'

function Portfolio() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='container' >
       <div className='portfolio-wrap' >
          
          <div className='section-header' >
             <h3 className='section-title text-start' > Portfolio </h3>   
          </div>

          <div className='section-body' >
              <Carousel responsive={responsive} >

                <PortfolioCard src='https://cutt.ly/6O5Nkay' title='Hello owrld bangladesh' view={35} />                  
                <PortfolioCard src='https://cutt.ly/6O5Nkay' title='Hello owrld bangladesh' view={35} />                  
                <PortfolioCard src='https://cutt.ly/6O5Nkay' title='Hello owrld bangladesh' view={35} />                  
                <PortfolioCard src='https://cutt.ly/6O5Nkay' title='Hello owrld bangladesh' view={35} />    

              </Carousel> 
          </div>

       </div>     
    </div>
  )
}

export default Portfolio