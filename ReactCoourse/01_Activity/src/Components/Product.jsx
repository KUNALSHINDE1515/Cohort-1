import React from 'react'
import Cards from './Cards'

function Product() {
    let styles = {
        display: "flex",
        flexwrap:"wrap",
        justifyContent: "center",
        alignItem:"center"
    }
    return (
        <div style={styles}>
            
        <Cards title="Logitech mx master" idx={0}/>
        <Cards title="apple pencil" idx={1}/>
        <Cards title="zebronics zeb-tranfeer" idx={2}/>
        <Cards title="random things" idx={3}/>
        </div>
    )
}

export default Product
