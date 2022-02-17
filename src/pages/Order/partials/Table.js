import React from 'react'
import TableRow from './TableRow'

function Table({ type }) {
  return (
    <div className='order-table-wrap' >
       <table className='table-style' >

         <thead>
            <tr>
               <td class="w52p"> <span>Title</span> </td>
               <td class="w19p"> <span>Buyer</span> </td>
               <td class="w19p"> <span>Paid</span> </td>
               <td class="w19p"> <span>Price</span> </td>
               <td class="w19p"> <span>Status</span> </td>
            </tr>
         </thead>

         <tbody>
            <TableRow status='completed' />
            <TableRow status='canceled' />
         </tbody>

       </table>         
    </div>
  )
}

export default Table