import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c:0,
}

export const customReducer = createReducer(initialState, {

    increament: (state) => {
        state.c = state.c + 1;
    },
    increamentByValue: (state,action) => { //action means like our input value  //state like variable 
        state.c += 1;
        state.c += action.payload;
    },
    decreament: (state)=> {
        state.c -= 1;
    }

})


