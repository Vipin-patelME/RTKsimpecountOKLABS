import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:5
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament: (state, action)=>{
            state.value += action.payload
        },

        decreament: (state)=>{
            state.value -= 1
        },
        reset: (state)=>{
            state.value = 5;
        }
    }

})

export const {increament, decreament, reset} = counterSlice.actions

export const selector = (state)=>state.counters.value

export default counterSlice.reducer