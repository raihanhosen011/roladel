import React from 'react'
import './dashboard.css'
import Kworks from './partials/Kworks'
import Portfolio from './partials/Portfolio'

import UserInfo from './partials/UserInfo'

function Index() {
  return (
    <div className='dashboard mb-2' >

       <div className='dashboard-bennar dashboard-bennar--profile' >
          <img src='https://fliplink.io/y36S0' />  
       </div>

       <div className='dashboard-page-head' >
          <UserInfo/>
       </div>

       <section className='section dashboard-page-portfolio' >
          <Portfolio/>  
       </section>

       <section className='section dashboard-page-kworks' >
          <Kworks />  
       </section>

    </div>
  )
}

export default Index