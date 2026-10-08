import React from 'react'


// this is datatype for props in TS data type of props compulsory 
type GreetProps = {
    name: string
    messageCount?: number  //question marks means it's optional props if we not pass this props we not give an error
    isLoggedIn:boolean
    styles?: React.CSSProperties
}
//interface also work but recommended that for application development used type and library development used interface
// interface GreetProps  {
//     name: string
// }



// const Greet = (props:GreetProps) => {
//     const {messageCount=0}=props
//   return (
//     <div>
//     <h2>{props.isLoggedIn ? <div>Greet! my name is {props.name} and we have {messageCount} Unread Message</div> : 'Wellcome Guest'}
//     </h2>   
//     <h3 style={props.styles}>Test content used css props</h3></div>
//   )
// }

// destructing props
const Greet = ({name,styles,isLoggedIn}:GreetProps,props:GreetProps) => {
    const {messageCount=0}=props
    
  return (
    <div>
    <h2>{isLoggedIn ? <div>Greet! my name is {name} and we have {messageCount} Unread Message</div> : 'Wellcome Guest'}
    </h2>   
    <h3 style={styles}>Test content used css props</h3></div>
  )
}

export default Greet