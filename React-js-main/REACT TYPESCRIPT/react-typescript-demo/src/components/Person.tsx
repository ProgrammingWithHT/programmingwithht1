import React from 'react'
import { PersonProps } from './Person.types'


// we also make separat file for props data type extension is .types.ts
// type PersonProps={
//     name:{
//         first: string
//         last:string
//     }
//     namelist :{first:string,last:string}[]
// }

const Person = (props:PersonProps) => {
  return (
    // <div>my name is {props.name.first + " "+ props.name.last}</div>
    // <div>my name is {props.namelist[2].first + " "+ props.name.last}</div>
    <div>
        {/* {props.namelist.map((name)=>{return <h2>{name.first + " " + name.last}</h2>})} */}
        {props.namelist.map(name=>(<h2>{name.first + " " + name.last}</h2>))}
    </div>
  )
}

export default Person