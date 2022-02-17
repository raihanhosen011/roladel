import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ListItem({ user }) {
  const [params, setParams] = useState() 

  const { username } = useParams()

  useEffect(() => {
    setParams(username)
  }, [username])

  return (
    <Link to={user} >
      <li className={`chat__list-item  ${params == user && 'list-active'}`} >
        <div className="chat__list-avatar" >
            <span className="user-avatar t-user-avatar" >
                <img src='https://cdn.kwork.com/files/avatar/big/08/11394620-1.jpg' className='rounded-circle' /> 
            </span>
            <div className='kw-avatar-pointer offline' />
        </div>  

        <div className='chat__list-content' >

            <div className="chat__list-info" >
                <div className="chat__list-user" > user012 </div> 
                <div className='chat__list-date' > February 10th </div>
                <div className='chat__list-star' > <i class="uil uil-star"></i> </div>
            </div>

            <div className='chat__list-message-content' >
                <div className="chat__list-message-wrapper" >
                    <div className='chat__list-message' > hello </div>
                </div>  

                <div className='chat__list-message-status' >
                    {/* <i class="uil uil-check"></i> */}
                </div>  
            </div>

        </div>   
      </li>    
    </Link>  
  )
}

export default ListItem