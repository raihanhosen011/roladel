import React from 'react'

function GigCards({ online, fav, title, username, review, price, src }) {
  return (
    <div className='gig-card' >
      <div className='card-image' >
         <img src={src} alt={title} />
      </div>

      <div className='card-content' >
         <div className='card-title' >
           <p>{ title }</p>
         </div>

         <div className='card-panel' >
            <div className='panel-username' >  
               <div className='light' style={{ background : online ? "#33996a" : "#838986" }} />
               <p> {username} </p>
            </div>

            <div className='panel-review' >
              {
                review && 
                <>
                  <div className='d-flex align-items-center mr-1 text-gold' >
                      <i class="uis uis-star mr-1"></i>
                      <h4 className='text-gold' > {review.point} </h4> 
                  </div>
                  
                  <span> ({review.count}) </span>                 
                </>
              }
            </div>
         </div>

         <div className='card-data' >
             <div className='card-fav' >
               {fav ? <img src='/images/heart.png' /> : <i class="uil uil-heart"></i> }
             </div> 
            
             <div className='gig-price' > <small> starting at </small>  <h5> ${price} </h5></div>  
         </div>
      </div>
    </div>
  )
}

export default GigCards