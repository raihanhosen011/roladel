import React from 'react'

import Search from '@iconscout/react-unicons/icons/uil-search'
import { Link } from 'react-router-dom'

import './header.css'


function Index() {
  return (
    <div className='header' >
       <div className='container' >
          <div className='header-wrapper d-flex align-items-center justify-content-between' >

            <div className='header-left d-flex align-items-center' >
                <div className='brand-image mr-1' >
                  <Link to='/ng' >
                    <img src='/images/kwork.png' />
                  </Link>
                </div>

                <div className='search' style={{ width : "360px" }} >
                  <div className='genaral-search' >
                      <div className='custom-search d-flex align-items-center' >  

                        <Search className='mr-2' />

                        <input name="" type="text" placeholder="Find Services" autocomplete="off" spellcheck="false" class="header-search form-control" />
                        
                        <span class="search-button">
                          <button class="kw-button kw-button--green"> Search </button> 
                        </span>

                      </div> 
                  </div>
                </div> 
            </div>

            <div className='header-right' >
               <div className='header-menu-wrapper' >
                  <div className='header-menu d-flex align-items-center' >

                     <Link to='/order#completed' > Orders </Link>

                     <Link to='/chat/user' > Chat </Link>

                     <Link to='/profile' > Profile </Link>

                     <Link to='/sign-up' > Sign up </Link>

                  </div>
               </div> 
            </div> 

          </div>
       </div>
    </div>
  )
}

export default Index