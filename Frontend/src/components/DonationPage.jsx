import React from "react";
import "../styles/donation.css"


function DonationPage() {
  return (
    <>   
     <section class="vh-100 w-auto">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6 col-xl-5  ml-1 ">
            <h1 class="maintitle">Together We can help</h1>
            <h3 class="subtitle">DONATE TO HELP THOSE IN NEED</h3>
            <h5 class="ddescption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laboriosam facilis minima voluptate qui ut doloribus, debitis
              voluptatum cumque natus blanditiis, nam doloremque!
            </h5>
            <a href="#">
              <button class="button">Donate Now</button>
            </a>
            <a href="./login.html">
              <button class="si_button  fw-bold p-2 ml-5">Read More</button>
            </a>
          </div>
          <div class="col-md-5 col-lg-5 col-xl-6">
            <img
              src="/img/Donation-page.png"
              class="imag m-lg-1"
              alt="Sample image"
            />
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
}

export default DonationPage;
