import React from 'react'
import Price from './price'
function Cards({title , idx}) {
    let oldPrices = ['12,495', '11,900', '1,599', '599'];
    let newPrices = ['8,999', '9,199', '899', '278'];

    let description = [
      ["8,000 DPI", "5 Programmable buttons"],
       ["intuitive surface","designed for ipad Pro" ],
       ["designed for ipad Pro","intuitive surface" ],
       ["wireless","8,000 DPI"]
      ];

      let styles = {
        marginLeft: "15px",
        width: "250px",
        height: "150px"

      }
        return (
      <div style={styles} className='product'>
       <h4>{title}</h4>
       <p>{description[idx] [0]}</p>
       <p>{description [idx] [1]}</p>
       <Price oldPrice ={oldPrices[idx]} newPrice={newPrices[idx]}/>
      </div>
    )
}

export default Cards
