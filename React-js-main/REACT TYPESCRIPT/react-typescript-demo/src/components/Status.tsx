import React from 'react'
type StatusProps={
    // status:string //this not show error while entering wrong string
    status:'loading' | 'success' | 'error' //this show error if we enter string other than success loading or error
}
const Status = (props:StatusProps) => {
    let message
    if(props.status==='loading')
        message='Loading...'
    else if(props.status==='success')
        message='Data fetched successfully'
    else if(props.status==='error')
        message='error fetching data'
  
  return (
    <div>Status - {message}</div>
  )
}

export default Status