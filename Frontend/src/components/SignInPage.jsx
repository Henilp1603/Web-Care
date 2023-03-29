import React from "react";
import "../styles/signIn.css";
import {Link} from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      {/* <NavB/> */}
      <div>
        <section className="vh-100 signinsec">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="./img/signup.png"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                {/* <div className="text-primary tit fw-bold">Web-Care</div> */}
                <form>
                  <div className="sign_in fw-bolder">SIGN IN</div>
                  <hr />

                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control form-control-lg inp"
                      placeholder="Enter a valid Name"
                    />
                  </div>

                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg inp"
                      placeholder="Enter a valid email address"
                    />
                  </div>

                  <div className="form mb-3">
                    <label className="form-label lab" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg inp"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input  "
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label
                        className="form-check-label Rlab"
                        for="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="signin-button btn btn-lg bt"
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      {" "}
                      Don't have an account?{" "}
                      <Link to="/signup" className="link-primary fw-bolder">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Fotter/> */}
    </>
  );
};

export default SignInPage;
