import React from 'react'

//dynaminc route this is 

const page = ({params}) => {  // http://localhost:3000/product/kdsldms
    console.log(params)  //if this components is server side than output give in server teminal now in this case our serever terminal is vs code terminal not browser console terminal
  return (
    <div>product id wala components</div>
  )
}

export default page