import { createReducer} from '@reduxjs/toolkit'
const initialState = {c:[]}

export const customReducers = createReducer(initialState,{
    CREATE: (state,action) =>{
        state.c = action.payload
    },
    ERROR: (state,action) =>{
        state.c = action.payload
    }
})