import React from 'react';
import { FirstName ,LastName} from './App';

// With Context

const ComC = () => {
    return <>
        <FirstName.Consumer>
            {
                (fname)=>{
                    return <>
                        <LastName.Consumer>
                            {
                                (lname)=>{
                                    return <h1> My Name Is:  {fname} {lname} </h1>
                                }
                            }
                        </LastName.Consumer>
                    </> 
                }
            }
        </FirstName.Consumer>
        <LastName.Consumer>
            {
                (lname)=>{
                    return <h1>my last name is {lname}</h1>
                }
            }
        </LastName.Consumer>
    </>
};

export default ComC;