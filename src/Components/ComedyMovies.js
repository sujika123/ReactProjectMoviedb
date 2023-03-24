import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Movielist.css'
import { useNavigate } from 'react-router-dom';


const ComedyMovies = () => {
  
    const [state,setState] = useState([])
    const navigate = useNavigate()

useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=9948beaa1978b07ef733bcbe5e8d2849&with_networks=213').then((res)=>{
        console.log(res.data.results);
        setState(res.data.results)
    })
}, [])
    
  return (

    <div className='row'>
       <h2 style={{marginLeft:"100px"}}>Comedy Movies</h2>

       
    <div className='posters'>

      {state.map((movies)=>(
      <div  onClick={()=> navigate(`/details1/${movies.id}`)}>
        
        <img className='poster' src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}/>

        
        </div>
      ))}
      </div>
       

   
    </div>
  )
}

export default ComedyMovies