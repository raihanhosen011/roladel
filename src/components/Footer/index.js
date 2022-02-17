import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

function Index() {
  return (
    <div className='footer' >
       <div className='container' >
          <div className='footer-wrapper' >
             <div className='row' >

                <div className='col-md-6' >
                  <div className='footer-left d-flex align-items-center' >
                    <div className='brand-image mr-1' >
                      <img src='/images/kwork.png' />    
                    </div>

                    <p>© roladel International Ltd. {new Date().getFullYear()}</p>
                  </div>
                </div>

                <div className='col-md-6 d-flex align-items-center justify-content-end' >
                  <div className='footer-content' >

                    <a href='#' > <i class="uil uil-facebook-f"></i> </a> 
                    <a href='#' > <i class="uil uil-instagram-alt"></i> </a> 
                    <a href='#' > <i class="uil uil-github"></i> </a> 

                    <Link to='/faq' className='menu-item' > FAQ </Link>
                  
                  </div>  
                </div>

             </div> 
          </div>  
       </div>     
    </div>
  )
}

export default Index