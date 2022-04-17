import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogo from '../../../imgaes/google.png'
import Loading from '../../pages/Loading/Loading';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});
      const navigate = useNavigate();
      if(loading || loading1){
        return <Loading></Loading>
    }


      const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;;
        const email = emailRef.current.value;;
        const password = passwordRef.current.value;;

         createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <div className="">
        <div className="container">
          <div className="login-resister">
            <div className="form-title text-center ">
              <h2 className="blue-color fs-2 fw-bold my-5 ">Register</h2>
            </div>
            <form onSubmit={handleRegister}>
              <div className="form-input">
                <input
                ref={nameRef}
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Name"
                  required
                />
              </div>
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
              <button className="btn-submit" type="submit">Register Now</button>
            </form>
            <div className="link-click">
              <span>
              Already have an account?
                <Link to="/login">Please login</Link>
              </span>
            </div>
            <div>
            <button  onClick={() => signInWithGoogle()} className="btn-submit" type="submit">
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