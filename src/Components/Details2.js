import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Details2 = () => {
    const hello = useParams()
    const [state,setState] = useState([])
    console.log(hello.id);
    const data2 = state.find((value)=> value.Id === parseInt(hello.id))
    console.log(data2,"helloooo");

  return (
    <div>
     <h1>Details 2</h1>
    </div>
  )
}

export default Details2