import { useReducer } from "react";  //used if state value depend on previous value 
import { PassReducerASaProps } from "./PassReducerASaProps";
const initialState = {count:0}

type CounterState = {
    count: number
}
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}
type ResetAction ={
    type: 'reset'
}
type CounterAction=UpdateAction|ResetAction
// type CounterAction = {
//     // type: string
//     type: 'increment' | 'decrement' | 'reset'
//     payload?: number
// }


function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () =>{
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={()=> dispatch({type: 'increment',payload:10})}>
                Increment 10
            </button>
            <button onClick={()=> dispatch({type: 'decrement',payload:10})}>
                decrement 10
            </button>
            <button onClick={()=> dispatch({type: 'reset'})}>RESET</button>
            {/* <PassReducerASaProps state={state} dispatch={dispatch}/> */}
        </>
    )
}