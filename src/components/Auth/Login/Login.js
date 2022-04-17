import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleLogo from '../../../imgaes/google.png'

const Login = () => {
  return (
    <div className="">
      <div className="container">
        <div className="login-resister">
          <div className="form-title text-center ">
            <h2 className="blue-color fs-2 fw-bold my-5 ">Login</h2>
          </div>
          <form>
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
            <button className="btn-submit" type="submit">Login</button>
          </form>
          <div className="link-click">
            <span>
              New to Dream Focus Click?{" "}
              <Link to="/register">Please Register</Link>
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

export default Login;
