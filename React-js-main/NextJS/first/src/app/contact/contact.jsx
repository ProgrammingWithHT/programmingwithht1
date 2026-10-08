'use client'

import React from 'react'
// import ServerComponent from '../servers/ServerComponent'

const Contact = ({children,value}) => {
  return (
    <div>
        <h1>Contact page is very {value}</h1>
        {children}
    </div>
  )
}
export default Contact