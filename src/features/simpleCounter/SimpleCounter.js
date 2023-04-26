import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiCall, decreament, increament, reset, selector } from './simpleCounterSlice'

const SimpleCounter = () => {
    const data = useSelector(selector)
    const dispatch = useDispatch()
    
    console.log("data--->", data)
  return (
    <div style={{textAlign:"center"}}>
        <h1>{data}</h1>
        <button onClick={()=>{dispatch(increament(3))}} type="button" >+</button>
        <button onClick={()=>{dispatch(reset())}} type="button" >Reset</button>
        <button onClick={()=>{dispatch(decreament())}} type="button" >-</button>
        <br />
        <br />
        <br />
        <br />
        <button style={{height:"35px", width:"100px", fontSize:"15px", backgroundColor:"goldenrod"}}  onClick={()=>{dispatch(apiCall())}} type='button'>Call the api</button>
    </div>
  )
}

export default SimpleCounter