import React from 'react'

function TableRow({ status }) {
  return (
    <tr class="m-hidden m-clearfix" data-note="">
        <td class="ellipsis-wrap">
        10,000 Real Organic Traffic YouTube Views With Bonuses
        </td>

        <td class="nowrap d-flex align-items-center"> <div className='is-online' /> thefridayshop222</td>
        
        <td class="nowrap">November 19, 2021</td>

        <td class="nowrap t-align-c pr33"><span class="funds-currency">$</span>16</td>
        
        <td class="pr10 nowrap"> <div className={`tr-button ${status}`} > {status} </div> </td>
    </tr>
  )
}

export default TableRow