import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleLogo from '../../../imgaes/google.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../pages/Loading/Loading";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if (user) {
        navigate(from, { replace: true });
    }
    if(loading){
        return <Loading/>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword =  () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

  return (
    <div className="">
      <div className="container">
        <div className="login-resister">
          <div className="form-title text-center ">
            <h2 className="blue-color fs-2 fw-bold my-5 ">Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input ref={emailRef}
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-input">
              <input
              ref={passwordRef}
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                required
              />
            </div>
            <button className="btn-submit" type="submit">Login</button>
            {errorElement}
          </form>
          
          <div className="link-click">
            <span>
              New to Dream Focus Click?{" "}
              <Link to="/register">Please Register</Link>
            </span>
            <span>
            Forget Password? <button className='btn btn-link text-dark pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> 
            </span>
          </div>
          <div>
          <button className="btn-submit" type="submit">
                <img className="me-1" src={GoogleLogo} alt="" />
              Google Sing In
              </button>
              <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
