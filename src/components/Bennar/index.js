import React from 'react'
import './bennar.css'

import Search from '@iconscout/react-unicons/icons/uil-search'

function Index() {
  return (
    <div className='kw-bennar' > 
      <div className='container' >
         <div className='bennar-wrapper text-center' >

            <h1 className='bennar-title' > Buy affordable freelance services on the go </h1>
            <p className='bennar-desc' >
                Save time and money with thousands of high-quality, affordable freelance services.
                <br/>
                Shop with confidence protected by our 100% Money Back Guarantee.
                <br/>  
                Explore the Marketplace now.
            </p>

            <div className='bennar-search' >
              <div className='bennar-search__wrapper' >
                <Search className='mr-2' />

                <input name="" type="text" placeholder='Try "social media design"' autocomplete="off" spellcheck="false" class="header-search form-control" />
                    
                <span class="search-button">
                  <button class="kw-button kw-button--green"> Search </button> 
                </span>
              </div>   

              <div className='bennar-search__sample' >  
                <p> Some ideas to try: mobile apps, translations </p>
              </div>
            </div>  

         </div> 
      </div> 
    </div>
  )
}

export default Index