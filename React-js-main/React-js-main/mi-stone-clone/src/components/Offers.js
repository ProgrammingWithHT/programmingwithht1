import React from 'react'
import Offer from "./Offer.js"
import "../styles/Offers.css"
import data from '../data/data.json'



const Offers = () => {
    return (
        <div className="offersSection"> 
        {
            data.offer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} />
            ))
        }
        </div>
    )
}

export default Offers