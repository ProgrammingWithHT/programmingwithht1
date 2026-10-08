import React from 'react'

// Basic
// type ButtonProps={
//     handleClick:()=>void
// }

// With event
type ButtonProps={
    handleClick:(event: React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
const Button = (props:ButtonProps) => {
  return (
    <button onClick={(event)=> props.handleClick(event,2)}>Click</button>
  )
}

export default Button