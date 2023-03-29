import React from 'react'
import "../styles/doctor.css";

function DoctorsPage() {
  return (
    <div>
      <section className='doctor' id='doctor'>
        <div className='container' >
          <div className='row min-vh-100 align-items-center text-center text-md-left' >
            <div className='col-md-6 pr-md-3 content' >
              <h1 className='mainH' >Feel better about,finding healthcare</h1>
              <h2 className='secondH'>FIND THE CARE YOU NEED</h2>
              <h4 className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta quas ratione itaque minima repellat ullam quod numquam a aut!</h4>
            </div>
            <div className='col-md-6 pl-md-3' >
             <img src="/img/Doctor-info-page-1.png" width="100%" alt="" />

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorsPage
