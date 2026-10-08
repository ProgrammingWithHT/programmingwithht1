import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState,useEffect} from 'react';
import { userAction } from './redux/actions/userAction';

function App() {

  const User = (users) => {
    return(
      <div>
        <h1>User Comp</h1>
        <h2>{users}</h2>
       </div>
    )

  }

  const dispatch = useDispatch();
  const userList = useSelector((state )=> state.userList)

  const { loading, users, error} = userList;

  useEffect( ()=> {
    dispatch(userAction())

  }, [dispatch])

  return (
    <div className='div1'>
      <h1>Redux Thunk Tutorial</h1>
      {loading ? <h2>Loading ....</h2> : error ? <h2>error</h2> : <User users={users} /> }
      
    </div>
  )
}

export default App;
