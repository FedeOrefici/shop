import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'

const Home = () => {

  const {data} = useContext(ContextData)
  console.log(data);

  return (
    <div>
      <button onClick={data}>click</button>
    </div>
  )
}

export default Home