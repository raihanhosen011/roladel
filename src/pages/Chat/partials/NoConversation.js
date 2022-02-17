import React from 'react'

function NoConversation() {
  return (
    <div className='no-conversation' >
       <div className='no-conversation-wrap' >
           <img src='/images/chat-conversation.svg' alt='conversation image' className='mb-2' />
           <h2> Select a Conversation </h2> 
           <p>
              Try selecting a conversation or <br/>
              searching for someone specific.
           </p>       
       </div> 
    </div>
  )
}

export default NoConversation