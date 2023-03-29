import React from 'react'
import "../styles/contact.css"

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">

<div className="container min-vh-100 ">

    <div className="row justify-content-center">

        <h1 className="heading"><span>'</span> make an appointment <span>'</span></h1>

        <div className="col-md-10" >

            <form action="">

                <div className="inputBox">
                    <input type="text" placeholder="full name"/>
                    <input type="number" placeholder="phone"/>
                </div>

                <div className="inputBox">
                    <input type="email" placeholder="your email"/>
                    <select>
                        <option value="" disabled selected>make an appointment</option>
                        <option value="09-11 am">09-11 am</option>
                        <option value="11-03 pm">11-03 pm</option>
                        <option value="03-06 pm">03-06 pm</option>
                        <option value="06-09 pm">06-09 pm</option>
                    </select>
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder="message ( optional )"></textarea>

                
                <input type="submit" name="" id="" value="make appointment" className="button "/>

            </form>

        </div>

    </div>

</div>

</section>
    </div>
  )
}

export default Contact
