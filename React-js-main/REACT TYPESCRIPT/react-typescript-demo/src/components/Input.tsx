import React from 'react'
type InputProps={
    value:string
    handleChange:(event: React.ChangeEvent<HTMLInputElement>)=>void //event as a props passed
}
const Input = (props:InputProps) => {
//event as a component 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event)
  }
  return (
    <input type='text' value={props.value} onChange={props.handleChange}/>
  )
}

export default Input