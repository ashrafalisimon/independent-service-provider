import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../imgaes/google.png'

const Register = () => {
    return (
        <div className="">
        <div className="container">
          <div className="login-resister">
            <div className="form-title text-center ">
              <h2 className="blue-color fs-2 fw-bold my-5 ">Register</h2>
            </div>
            <form>
              <div className="form-input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className="btn-submit" type="submit">Register Now</button>
            </form>
            <div className="link-click">
              <span>
              Already have an account?
                <Link to="/login">Please login</Link>
              </span>
            </div>
            <div>
            <button className="btn-submit" type="submit">
                  <img className="me-1" src={GoogleLogo} alt="" />
                Google Sing In
                </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;