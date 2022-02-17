import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './chat.css'

import ListItem from './partials/ListItem'
import Message from './partials/Message'
import NoConversation from './partials/NoConversation'

function Index() {
  const { username } = useParams()

  return (
    <div className='kw-chat' >
       
       <div className={`back-button text-center pt-1 d-none ${username !== 'user' && 'd-block'}`} >
          <Link to='user' > Back </Link>   
       </div> 

       <div className='chat-wrapper' >
          <div className='chat chat_selected' >

             <div id="app-chat-list" className={`chat__aside ${username !== 'user' && 'mobile-chat'}`} >
                <div>
                   
                   <div className="chat__search" >
                     <div className='chat__search-inner' >
                        <i class="uil uil-search"></i>
                        <input type="text" placeholder="Search" class="chat__search-input" />
                     </div>
                   </div>

                   <div className='chat__list-wrapper' >
                      <div className="chat__scroll chat-list__scroll gm-autoshow gm-scrollbar-container" >
                         <div className='gm-scroll__view' style={{ width : '328px', height : '511px' }} >

                            <ul className='chat__list' >
                               <ListItem user='raihanhosen' />
                               <ListItem user='usero7' />
                            </ul>

                         </div>
                      </div> 
                   </div>

                </div>
             </div>

             <div className={`chat__conversation-wrapper w-100 fixed-offer ${username === 'user' && 'mobile-chat'}`} >
                 { username !== 'user' ?
                     <Message/> :
                     <NoConversation />
                 }                
             </div>

          </div>    
       </div> 
    </div>
  )
}

export default Index