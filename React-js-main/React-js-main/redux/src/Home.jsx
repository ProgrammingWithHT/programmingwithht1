import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = ()=> {
    // const value = 20;

    const {c} = useSelector(state => state.custom);  //used for get value from  state

    const dispatch = useDispatch();

    // Actions
    const addBtn = ()=>{
        dispatch({
            type: "increament"
        })
    }
    const addBtn25 = ()=>{
        dispatch({
            type: "increamentByValue",
            payload: 25,
        })
    }
    const subBtn = ()=>{
        dispatch({
            type: "decreament"
        })
    }

    return (
        <div>
            {/* <h2>{value}</h2> */}
            <h2>{c}</h2>
            <button onClick={addBtn}>Inreament</button>
            <button onClick={addBtn25}>Inreament By 25</button>
            <button onClick={subBtn}>Decreament</button>
        </div>
    )
}

export default Home;