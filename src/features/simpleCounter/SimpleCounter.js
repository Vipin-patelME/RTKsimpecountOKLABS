import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, reset, selector } from './simpleCounterSlice'

const SimpleCounter = () => {
    const data = useSelector(selector)
    const dispatch = useDispatch()
    console.log("data--->", data)
  return (
    <div style={{textAlign:"center"}}>
        <h1>{data}</h1>
        <button onClick={()=>{dispatch(increament())}} type="button" >+</button>
        <button onClick={()=>{dispatch(reset())}} type="button" >Reset</button>
        <button onClick={()=>{dispatch(decreament())}} type="button" >-</button>
    </div>
  )
}

export default SimpleCounter