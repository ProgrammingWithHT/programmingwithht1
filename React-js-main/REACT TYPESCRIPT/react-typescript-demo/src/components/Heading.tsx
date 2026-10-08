import React from 'react'
type headingProps={
    children: string
}
const Heading = (props:headingProps) => {
  return (
    <div>Heading - {props.children}</div>
  )
}

export default Heading