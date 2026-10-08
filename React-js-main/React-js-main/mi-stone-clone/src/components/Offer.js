import React from 'react'

const Offer = (props) => {
    return <a href={props.link}> <img src={props.src} alt={`${props.index} offer`} /></a>
    
}

export default Offer