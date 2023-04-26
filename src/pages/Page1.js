import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SimpleCounter from '../features/simpleCounter/SimpleCounter'

const Page1 = () => {
  const apiData = useSelector(state => state.counters.postData)
  console.log(apiData)
  const [stateData, setStateData] = useState([])

  useEffect(()=>{
    setStateData([...apiData])
  }, [apiData])
  return (
    <div>
        <h2>This is page 1</h2>
        <SimpleCounter />
        <ul style={{listStyleType:"none"}}>
          {
            stateData?.map((eachData, idx) => 
              <li key={idx}>
                <h4><span style={{color:"red"}}>{idx + 1}  </span>{eachData.title}</h4>
                <p style={{color:'green'}}>{eachData.body}</p>
              </li>
            )
          }
        </ul>
    </div>
  )
}

export default Page1