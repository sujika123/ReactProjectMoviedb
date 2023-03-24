import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details1 = () => {
  
    const hello = useParams()
    const [state,setState] = useState([])
    console.log(hello.id);
    const data1 = state.find((value)=> value.Id === parseInt(hello.id))
    console.log(data1,"helloooo");


    // useEffect(() => {
    //     axios.get('https://api.themoviedb.org/3/discover/tv?api_key=9948beaa1978b07ef733bcbe5e8d2849&with_networks=213').then((res)=>{
    //         console.log(res.data.results);
    //         setState(res.data.results)
    //     })
    // }, [])

  return (
    <div>
     <h1>Details page</h1>
    
     {/* <img className='poster' src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}/> */}
{/* 
     {state.map((demo)=>{
            return(
                
                <div>
                <h1>Title : {demo.name}</h1>
                <h1>Id : {demo.id}</h1>
                <h1>Des : {demo.description}</h1>
                <h1>Category : {demo.category}</h1>               
                <img src={demo.image}/>
                <h1>Price : {demo.price}</h1>
                </div>

            )
        })} */}

        {/* <h1>{data1.name}</h1>
        <h1>{data1.id}</h1>
        <h1>{data1.first_air_date}</h1>
        <h1>{data1.overview}</h1>

        <img src={data1.image}/> */}
    </div>
  )
}

export default Details1