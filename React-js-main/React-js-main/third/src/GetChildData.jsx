import React, { useState } from 'react'


const GetChildData = (props) => {

    const [value,setValue] = useState(0)
    const a = () =>{
        setValue(value + 1)
        props.getD(value)
    }
  return (
    <div onClick={a}>GetChildData</div>
  )
}

export default GetChildData