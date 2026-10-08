import React from "react";

function Cards(props) {  //we can write any name | In props we we all our custom attributes
    // console.log(props)  OUTPUT: give Object of customs attributes
    const a = (title)=>{
        console.log(title)
    }
    return <>
        <div className='cards' onClick={()=> a(props.title)}>
            <div className='card'>
                <img src={props.imgsrc} alt='myPic' className='card_img' />
                <div className='card_info'>
                    <span className='card_category'>{props.title}</span>
                    <h3 className='card_title'>{props.sname}</h3>
                    <a href={props.link} target='_bland'>
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Cards;