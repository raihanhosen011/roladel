import React from 'react'
import { Link } from 'react-router-dom'

function SingleMessage() {
  return (
    <div className='message-wrapper' >
       <div className='message' >

            <Link to='user' className='kw-conversation__header-user-link mr-2' >
               <div className='chat__list-avatar' >
                  <span className="user-avatar t-user-avatar" >
                     <img src='https://cdn.kwork.com/files/avatar/big/08/11394620-1.jpg' className='rounded-circle' /> 
                  </span>  
                  <div className='kw-avatar-pointer' />
                </div>
            </Link>

            <div className='message-content' >
                <div className='content-header' > 
                   <Link to='' > <strong> usernai </strong> </Link>  
                   <small> 5:37 p.m. </small> 
                </div> 

                <div>
                   <div>
                      <p className='message-body' > hello world</p>
                   </div> 
                </div>
            </div>            

       </div>     
    </div>
  )
}

export default SingleMessage