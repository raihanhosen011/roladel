import React, {useState, useEffect} from 'react'

import './order.css'
import LiveTab from './partials/LiveTab'
import NoOrders from './partials/NoOrders'
import Table from './partials/Table'

function Index() {
   const [hash, setHash] = useState('#completed')

   useEffect(() => {
     setHash(window.location.hash)
   }, [window.location.hash])

  return (
    <div className='order' >
       <div className='container' >
          <div className='order-wrap py-4' > 
             
             <div className='page-head mb-5' >
                <h1 className='page-title' > My Orders </h1>
             </div>

             <div className='page-body' >
                
                <div className='order-live-tab' >
                   <div className='live-tab-content' >

                     <LiveTab clas={hash == '#completed' && 'active'} to='#completed' title='completed' count={12} />
                     <LiveTab clas={hash == '#canceled' && 'active'} to='#canceled' title='canceled' count={4} />
                     <LiveTab clas={hash == '#all' && 'active'} to='#all' title='all' count={12} />

                   </div>   
                </div>

               <div className='order-table' >
                  {hash === '#completed' && <Table type='complete' />} 
                  {hash === '#canceled' && <Table type='cancel' />} 
                  {hash === '#all' && <Table type='all' />} 
               </div>   

             </div>

          </div>
       </div> 
    </div>
  )
}

export default Index