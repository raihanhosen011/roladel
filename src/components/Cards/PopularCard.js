import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'

function PopularCard({ to, title, src }) {
  return (
    <Link to={to} >
       <div className='popular-card' >
          <div className='backdrop' />  

          <img src={src} alt={title} />

          <h3> {title} </h3>
       </div>     
    </Link>
  )
}

export default PopularCard