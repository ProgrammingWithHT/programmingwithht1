import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'next/image';
import Link from 'next/link';


const Chat = () => {
  const addChild = useRef(null)
  const [message,setMessage] = useState('')
  
  function SendMessage(e){
    const node = document.createElement('p');
    const textnode = document.createTextNode(message);
    console.log('textNode: ',textnode);
    node.appendChild(textnode)
    document.getElementById('myP').appendChild(node)
    // addChild.current.appendChild(node)

    node.classList.add('messageText')
    setMessage('')
  }
  
  return (
    <div className='chatBox'>

        <div className='navBox'>
          <div className='imgBox'>
            <img className='img' src='/favicon.webp' alt='notfound' height={40} width={40} />
          </div>
          <div className='rightNav'>
              <Link href='' className='btnNav'>Sign In</Link>
              <Link href=''className='btnNav'>Sign Up</Link>
          </div>
        </div>

        <div className='loginForm1'>

          <div id='myP' ref={addChild} style={{height:'70vh',fontSize:'2rem',color:'aliceblue',display:'flex',flexDirection:'column',overflow:'auto'}}>

            {/* <p  className='messageText'>{mess}</p> */}

          </div>

          <div style={{display:'flex',flexDirection: 'row',alignItems:'flex-end'}}>
            <input value={message} onChange={(e)=> setMessage(e.target.value)} type='text' style={{fontSize: '2rem',padding:'.5rem',width:'100%',outline: 'none'}}/>
            <button onClick={(e)=>SendMessage(e)} style={{fontSize: '2rem',marginLeft:'.5rem',padding:'.5rem',cursor:'pointer'}}>Send</button>
          </div>
          
        </div>

    </div>
  )
}

export default Chat