import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.css'
import AboutPage from './AboutPage'
import FacilityPage from './FacilityPage'
import Post from './Post'
import ProductSection from './ProductSection'
import ReviewPage from './ReviewPage'
function HomePage() {
  
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="row min-vh-100 align-items-center text-center text-md-left">
            <div className="col-md-6 pr-md-5" >
              <img src="/img/home.png" width="100%"  />
            </div>

            <div className="col-md-6 pl-md-3 content mt-1" >
              <h1>
                <span>stay</span> safe, <span>stay</span> healthy.
              </h1>
              <h3>caring for you.</h3>
              <a href="#">
                <button className="button">learn more</button>
              </a>
              <a href="#">
                <button className="si_button  fw-bold p-2 ml-5"><Link to="/signin" >Sign-in</Link></button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <AboutPage/>
      <FacilityPage/>
      <ReviewPage/>
      <ProductSection/>
      <Post/>
    </>
  )
}

export default HomePage
