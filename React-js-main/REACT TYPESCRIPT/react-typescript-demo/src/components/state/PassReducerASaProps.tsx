

import { Dispatch } from "react";
type CounterState = {
    count: number
}
type CounterAction = {
    type: string
    payload: number
}


type ReducerType = {
    state: CounterState
    dispatch: Dispatch<CounterAction>
}

export const PassReducerASaProps=(props:ReducerType)=>{
    
    return (
        <div>
            {props.state.count} " and
        </div>
    )
}