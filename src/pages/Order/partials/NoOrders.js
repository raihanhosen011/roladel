import React from 'react'

function NoOrders() {
  return (
    <div className='no-order' >
       <img src='/images/empty-box.svg' />

       <div className='no-order-contents mt-3 text-center' >
          <h3> No orders (yet)! </h3>
          <p> 
            Search for kworks or browse the Kwork Marketplace <br/>
            to place an order.
          </p>
       </div>
    </div>
  )
}

export default NoOrders