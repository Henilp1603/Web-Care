import React from "react";
import {Link} from "react-router-dom";
import "../styles/signup.css";

const SignupPage = () => {
  return (
    <div>
      <section class="vh-100 signupsec">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4 ">
              {/* <div class="text-primary tit fw-bold">Web-Care</div> */}
              <form>
                <div class="sign_in fw-bolder">SIGN UP</div>
                <hr />

                <div class="form mb-4">
                  <label class="form-label lab" for="form3Example3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control form-control-lg inp"
                    placeholder="Enter a valid Name"
                  />
                </div>

                <div class="form mb-4">
                  <label class="form-label lab" for="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg inp"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div class="form mb-3">
                  <label class="form-label lab" for="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg inp"
                    placeholder="Enter password"
                  />
                </div>

                {/* <div class="d-flex justify-content-between align-items-center">
            
            <div class="form-check mb-0">
              <input class="form-check-input  " type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label Rlab" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div> */}

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" class="signup-button btn btn-lg bt">
                    Sign Up
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    {" "}
                    Already have an account?{" "}
                    <Link to="/signin" class="link-primary fw-bolder">
                      Log-in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div class="col-md-9 col-lg-6 col-xl-5 offset-xl-1">
              <img
                src="./img/signin-3.png"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
