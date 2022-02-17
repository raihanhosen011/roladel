import React from 'react'

function PortfolioCard({ title, view, src }) {
  return (
        <div className='portfolio-card' >
          <div className='backdrop' />
          <img src={src} />

          <div className='card-contents' >
              <div className='card-content-texts' >
                <h4> {title} </h4>
                <p> promo videos </p> 
              </div>

              <div className='card-content-view d-flex' >
                <i class="uil uil-eye mr-1"></i> 
                <span> {view} </span>
              </div>
          </div> 
        </div>     
  )
}

export default PortfolioCard