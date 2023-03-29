import React from 'react'
import "../styles/about.css"

function AboutPage() {
  return (
    <div>
      <section className="about" id="about">

<div className="container">
  <h1 className="heading"><span>'</span> About Us <span>'</span></h1>

    <div className='row min-vh-100 align-items-center ' >
        <div className='col-md-6 content' >
            <div className="box">
                <h3> <i className="fas fa-ambulance"></i> Buy Any Medicine </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
            </div>
            <div className="box">
                <h3> <i class="fas fa-procedures"></i> Emergency Tests  </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
            </div>

            <div className="box">
                <h3> <i class="fas fa-stethoscope"></i> free check-ups </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
            </div>

            <div className="box">
              <h3> <i class="fa-solid fa-heart-pulse"></i> Total Care </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
          </div>
        </div>
        <div className='col-md-6 d-none d-md-block' >
        <img src="/img/about.png" width="100%" alt="" />
        </div>
    </div>
    

</div>

</section>
    </div>
  )
}

export default AboutPage
