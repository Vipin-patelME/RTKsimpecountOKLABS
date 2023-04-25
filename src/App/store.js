import { configureStore } from "@reduxjs/toolkit";
import countreducer  from "../features/simpleCounter/simpleCounterSlice";


const store = configureStore({
    reducer:{
        counters:countreducer
    }
})

export default store