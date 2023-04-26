import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:5,
    postData:[],
    status:"loading"
}

export const apiCall = createAsyncThunk(
    '',
    async(x=10)=>{
        console.log(x)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        //console.log(data)
        return data
    }
)

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
    },
    extraReducers:
        (builder) => {
            console.log("builder--->", builder)
            builder
            .addCase(apiCall.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(apiCall.fulfilled, (state, action) => {
                state.status = 'idle';
                state.postData = [...action.payload]
                console.log("fulfilled---->", action)
            })
            .addCase(apiCall.rejected, (state, action) =>{
                state.status = "Idle";
                console.log("reject---->",action)
            })
    }
    

})

export const {increament, decreament, reset} = counterSlice.actions

export const selector = (state)=>state.counters.value

export default counterSlice.reducer