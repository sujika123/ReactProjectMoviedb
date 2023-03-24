import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Carousel1() {
  return (
    <div>
      <MDBCarousel showControls showIndicators style={{height: "500px", width:"970px",marginLeft:"280px"}}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://static.vecteezy.com/system/resources/previews/000/664/483/original/abstract-blue-banner-design-vector.jpg'
        alt='...'
      >
        <h1>MOVIES</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
      </MDBCarouselItem>
      {/* <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem> */}
    </MDBCarousel>
    </div>
  )
}

export default Carousel1