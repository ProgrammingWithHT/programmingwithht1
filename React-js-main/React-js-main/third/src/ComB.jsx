import React ,{useContext} from 'react';
import ComC from './ComC';
import { FirstName ,LastName} from './App';

// With Used Context

const ComB = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return <h1>my name is {fname} {lname}</h1>

    // return <ComC/>
};

export default ComB;