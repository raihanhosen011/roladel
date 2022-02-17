import React from 'react'
import { Link } from 'react-router-dom'

function UserInfo() {
  return (
    <div className='container' >
       <div className='userinfo-wrapper' >
        <div className='row' >

            <div className='col-md-8 dashboard-col-left' >
                <div className='row' >

                    <div className='col-md-4 pr-0' >
                        <div className='user-col-profile p-2 p-md-3' >
                           
                           <div className='user-avatar-container' >
                              <img src='https://fliplink.io/z4Ps7' alt='User avatar' />
                           </div>

                           <div className='user-info-wrapper mt-3' >
                              <h2 className='user-username mb-2' > raiahn hosen 01 </h2>  

                              <div className="user-location mb-1" > <i className="uil uil-location-point"></i> <span> russia </span> </div>      
                              <div className="user-joined mb-1" > <i className="uil uil-clock-seven"></i> <span>Joined June 23, 2020</span> </div>      
                              <div className="user-nowrap mb-1" > <div className='is-online' /> <span>online</span> </div>      
                              <div className="user-block mb-1" > <i class="uil uil-eye-slash"></i> <Link>Block this user</Link></div>      
                           </div> 

                           <div className='user-badges mt-3' >
                              <div className='user-badge-wrapper' >
                                 <img src='https://fliplink.io/Vg0Jd' />   
                              </div>  
                           </div>

                        </div> 
                    </div>

                    <div className='col-md-8 px-0' >
                        <div className='user-col-about p-2 p-md-3' >

                           <h2 className='user-fullname' > Alexy </h2>
                           <h3 className='user-profession' > SEO Promotion - Backlinks, link builder </h3>

                           <p className='user-description mt-3' >
                               I'm an SEO backlink specialist!<br/>
                               I promote my site through trusted resources (various redirects), use social media, and many tools to improve the ranking of your site.<br/>
                               Always in touch, write, I will give advice and explain how it works
                           </p>

                        </div>
                    </div>

                </div>  
            </div>

            <div className='col-md-4 dashboard-col-right' >
                <div className='user-sell-info p-4 p-md-3' >
                    <button className='user-contact-button p-2 w-100 pointer' touch-action="manipulation" > 
                       <h3> Contact Me </h3>
                       <small> or order custom kwork </small> 
                    </button>               

                    <div className='user-selling-wrap mt-3' >
                       <div className='user-review d-flex' > <p className='text-gold mr-2' ><i class="uis uis-star"></i> 5.0</p> <h4> Professional seller </h4> </div> 

                       <div className='user-satisfaction mt-2' >
                          
                          <div className='order-colmplete d-flex' > <h3>522</h3> <span> orders completed </span> </div>  
                          <div className='total-review d-flex' > <h3>24</h3> <span> total reviews </span> </div>  
                          <div className='succesfull-delivered d-flex' > <h3>99%</h3> <span> of orders delivered successfully </span> </div>  
                          <div className='ontime-delivery d-flex' > <h3>100%</h3> <span> of orders delivered on time </span> </div>  
                          <div className='ontime-delivery d-flex' > <h3>48%</h3> <span> repeat orders </span> </div>  
                       
                       </div> 
                    </div>
                </div>
            </div>

        </div>        
       </div> 
    </div>
  )
}

export default UserInfo