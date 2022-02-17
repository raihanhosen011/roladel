import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

function Index() {
  const [option, setOption] = useState('buyer')
  const [page, setPage] = useState('1st') 
  const [error, setError] = useState('')

  const [value, setValue] = useState({ email : '', username : '', password : '' })
  
  // handle input change ----------
  function handleChange(e) {
      const {value, name} = e.target;
      setValue({
         ...value,
         [name]: value
      });
  }

  // hanlde next button ----------
  function handleNext() {
    if (value.email.length === 0){
       setError('Enter a valid email address')
    }else{
       setPage('2nd')
    }
  }

  
  return (
    <div className='sign-up' >  
       <div className='container' >
          <div className='sign-up-wrap' >
             <div className='sign-up-content p-3' >

                <h3 className='mb-3' > Sign Up </h3>

                <form >
                  <div className={`sign-up-1stpage ${page === '2nd' && "is-1st"}`} >

                    <div className='sign-up-option w-100' >
                        <div className={option === 'buyer' && "is-active"} onClick={() => setOption('buyer')} > <span> Buyer </span> </div>
                        <div className={option === 'seller' && "is-active"} onClick={() => setOption('seller')} > <span> Seller </span> </div>
                    </div>     

                    <div className='sign-up-info' >
                       <input onChange={handleChange} className='input-style mt-3' placeholder='Email' name="email" size="30" type="text" /> 
                       <small className='text-red' > {error} </small>

                       <div className='next-button w-100 p-2 mt-2' onClick={handleNext} > Next </div>
                    </div>

                    <small className='text-center my-2 d-block' >or continue with</small>
                    <button className='text-center w-100 p-2 social-btn' > <i class="uil uil-facebook-f mr-2"></i> facebook </button>
                    <small className='text-center d-block mb-4 mt-2' > Already have an account? <Link className='first-color' > login </Link> </small>

                  </div>

                  <div className={`sign-up-2ndpage ${page === '1st' && "is-2nd" }`} >

                     <div className='sign-up-info' >
                       <input onChange={handleChange} className='input-style mt-3' placeholder='Username' name="username" size="30" type="text" /> 
                       <input onChange={handleChange} className='input-style mt-3' placeholder='Password' name="password" size="30" type="text" /> 
                      
                       <button type='submit' className='next-button w-100 p-2 mt-2' > Join now </button>
                       <small className='text-center d-block mb-4 mt-2' > Already have an account? <Link className='first-color' > login </Link> </small>
                     </div>
                  
                  </div>                
                </form>  
                
             </div> 
          </div>
       </div>
    </div>
  )
}

export default Index