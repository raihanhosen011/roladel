import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import SingleMessage from './SingleMessage'

function Message() {
    const [media, setMedia] = useState([]) 

    // FILE HANDLER FUNCTION
    function onFileChange(e) {
        const files = [...e.target.files]
        let err = ""
        const imgArray = []
        
        files.forEach(file => {
           if (!file) {
              return err = "File does not exist."
           } 
           
           if(file.size > 1024 * 1024 * 5){
              return err = "The image/video largest is 5mb."
           }
  
           return imgArray.push(file)
        })
  
        setMedia([...media, ...imgArray])  
    }
  
    // DELETE IMAGE HANDLER
    function onDeleteMedia(url) {
       let newMedia = media?.filter(img => img !== url)
       setMedia(newMedia)
    }  

    return (
            <>
                <div className='chat__conversation-app' > 
                   
                   <div className='kw-conversation__header' >
                      <div className='kw-conversation__header-column' >
                         <Link to='user' className='kw-conversation__header-user-link' >
                            <div className='chat__list-avatar' >
                              <span className="user-avatar t-user-avatar" >
                                 <img src='https://cdn.kwork.com/files/avatar/big/08/11394620-1.jpg' /> 
                              </span>  
                              <div className='kw-avatar-pointer' />
                            </div>
                         </Link>

                         <div className="kw-conversation__header-title ml-2" >
                            <div className='kw-conversation__header-top' >
                               <Link className='chat__link kw-conversation__header-title-link' >
                                  <span className='kw-conversation__header-name font-600 mr-3' > raihan </span>
                                  <span className='kw-conversation__header-full-name' > Raihan Hosen</span>
                                  <span className='kw-conversation__header-user-time' > <i class="uil uil-sun mx-1"></i> 8:03 a.m. </span>
                               </Link>
                            </div>

                            <div className='kw-conversation__header-title-info' >
                               <span> offline </span>
                               <span className='user-last-date ml-2' >  2 days  </span>
                            </div>
                         </div>
                      </div>

                      <div className='kw-conversation__header-column' >
                         <div className='kw-delete-btn pointer mr-1' > <i class="uil uil-trash"></i> </div>
                      </div>
                   </div>

                   <div className='kw-conversation__list page-conversation' >
                      <div className='chat__scroll chat-messages-list__scroll gm-autoshow gm-scrollbar-container' >
                         <div className='gm-scroll-view' style={{ height: '448px' }} >
                            <div className='conversation-messages-list' >
                               <div className='messages-list messages-list--with-orders' >

                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>
                                  <SingleMessage/>

                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className='kw-conversation__footer' >

                     {
                        media.length > 0 && 
                        <div className='attached-images-area' > 
                           {
                              media?.map(url => (
                                 <div className='single-attachment mb-1' >
                                    <img src={URL.createObjectURL(url)} alt='' /> 
                                    <div className='attachment-close' onClick={() => onDeleteMedia(url)} > <i class="uil uil-times"></i> </div>
                                 </div>                              
                              ))
                           }
                        </div>
                     }  

                     <div className='mf-message-row' >
                        <div className='mf-message-input' >
                           <form>
                              <div className='mf-plus' >
                                 <i class="uil uil-paperclip"></i>
                                 <input onChange={onFileChange} type='file' className='mf-attachment-input' />
                              </div>

                              <div className='mf-message' >
                                 <input name='message' type='text' placeholder='Type your message here ...' className='mf-text-input' />
                              </div>

                              <div className='mf-send' >
                                 <button type='submit' >
                                     <i class="uil uil-message"></i>
                                 </button>
                              </div>                                
                           </form>
                        </div>
                     </div>
                   </div>

                </div>
            </>
        )
}

export default Message