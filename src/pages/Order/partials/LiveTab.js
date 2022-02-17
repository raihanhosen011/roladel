import React from 'react'
import { Link } from 'react-router-dom'

function LiveTab({ to, title, count, clas }) {
  return (
    <>
      <Link to={to} className={`live-tab_item ${clas}`} >
         <span className='live-tab_item-title' > {title} </span>
         <p className='live-tab_item-count' > { count > 0 && count } </p>
      </Link>
    </>
  )
}

export default LiveTab