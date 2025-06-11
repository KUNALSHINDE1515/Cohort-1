import React from 'react'
import Price from './price'
function Cards({title}) {
    let oldPrices = ['12,495', '11,900', '1,599', '599'];
    let newPrices = ['8,999', '9,199', '899', '278'];
        return (
      <div className='product'>
       <h4>{title}</h4>
       <p>Description</p>
       <Price></Price>
      </div>
    )
}

export default Cards
