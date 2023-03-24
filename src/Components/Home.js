import React from 'react'
import Cards from '../Cards'
import Banner from './Banner'
import Cards1 from './Cards1'
import Carousel1 from './Carousel1'
import ComedyMovies from './ComedyMovies'
import Footer from './Footer'
import LatestMovies from './LatestMovies'
import Movielist from './Movielist'
import Movielist2 from './Movielist2'
import Movielist3 from './Movielist3'
import Navbar1 from './Navbar1'
import PopularMovies from './PopularMovies'

function Home() {
  return (
    <div>
      <Navbar1/>
      <Banner/>
      <ComedyMovies/>
      <LatestMovies/>
      <PopularMovies/>
      {/* <Carousel1/> */}
      {/* <Cards1/> */}
      {/* <Cards/> */}
      {/* <Movielist/> */}
      {/* <Movielist2/>
      <Movielist3/> */}
      <Footer/>
    </div>
  )
}

export default Home