import React from 'react'
import "../styles/fotter.css"

function Fotter() {
  return (
    <div>
      <section className="footer">

<div className="container">

    <div className="row">

        <div className="col-md-4" >
            <a href="#" className="logo"><span>H</span>ealth<span>C</span>are.</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nemo porro quasi minima consequuntur dolorum, quas amet in autem id?</p>
        </div>

        <div className="col-md-4 text-center" >
            <h3>links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">facility</a>
            <a href="#">review</a>
            <a href="#">contact</a>
            <a href="#">post</a>
        </div>

        <div className="col-md-4 text-center" >
            <h3>share</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">github</a>
        </div>

    </div>

</div>



</section>
    </div>
  )
}

export default Fotter
