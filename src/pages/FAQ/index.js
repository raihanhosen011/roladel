import React, { useState } from 'react'
import './faq.css'

import { quistionAnswar } from './partials/qa'

function Index() {
  const [tab, setTab] = useState('faq') 
  const [faq, setFaq] = useState([]) 
  const [ans, setAns] = useState({})

  // HANDLE SINGLE FAQ OPTION
  function handleFaq(data) {
     setFaq(data.questions) 
     setTab('question')
  }

  // HANDLE SINGLE QUESTION
  function handleQuestion(data){
    if (data.questions){
      setFaq(data.questions)
    }
    else if(data.answare){
      setAns(data.answare)
      setTab('answare')
    }
  }

  // HANDLE GO BACK 
  function handleBack(){
      setFaq([])
      setAns({}) 
      setTab('faq')
  }

  return (
    <div className='kw-faq' >

       <div className='faq-bennar' >
          <div className='container' >
             <div className='faq-bennar__wrapper text-center' >

                <h2 className='faq-bennar__title' > How can we help? </h2>
                <div className='faq-bennar__search' >
                  <i class="uil uil-search"></i> 
                  <input type='text' placeholder="Search for an article" className='form-controll' />
                </div>

             </div>
          </div> 
       </div>

       <section className='section faq-section' >
          <div className='container' >
             <div className='faq-quistion-wrap' > 

                <div className='section-header mb-5' >
                   <h2 className='section-title' > Frequently Asked Questions </h2>
                </div>

                <div className='section-body' >
                   <div className='question-wrapper' >
                     { tab === 'faq' && 
                       <div className='faq-options' >
                          {
                             quistionAnswar.map(data => 
                                <div className='article-box' onClick={() => handleFaq(data)} >
                                   <img src={data.img} className='article-icon' />
                                   <h4 className='article-title' > {data.title} </h4>
                                </div>  
                             )                              
                          }
                       </div>
                     } 

                     {  tab === 'question' &&
                          <div className='questions-content' > 
                             <div className='questions-content-header' >
                               <i class="uil uil-arrow-circle-left" onClick={handleBack} ></i>
                             </div >

                             {
                              faq.length > 0 && 
                                 faq?.map((data) => 
                                    <>
                                       <div className='single-question' onClick={() => handleQuestion(data)} >
                                          <img src='/images/icon/radiation.png' />  <p> {data.question} </p>   
                                       </div>                                     
                                    </>                                 
                                 )
                              } 
                          </div>  
                     }


                     <div className='answare-content' >
                        {
                           tab === 'answare' && 
                              ans.title &&
                                <>
                                  <div className='answare-content-header' >
                                    <h4> {ans.title} </h4>

                                    <i class="uil uil-arrow-circle-left" onClick={handleBack} ></i>
                                  </div>

                                  <div className='answare-content-article' >
                                    <div className='fr-view' >
                                       {ans.description}
                                    </div>
                                  </div>                             
                                </>
                        }
                     </div> 

                   </div>  
                </div>  

             </div>  
          </div>  
       </section>

    </div>
  )
}

export default Index