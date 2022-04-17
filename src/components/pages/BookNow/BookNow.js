import React, { useRef } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookNow = () => {
    const nameRef = useRef('');
    const numberRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        if(name && number && email && address){
            toast('Successfully Book Now');
        }
    }
    return (
        <div>
             <div className="">
        <div className="container">
          <div className="login-resister">
            <div className="form-title text-center ">
              <h2 className="blue-color fs-2 fw-bold my-5 ">Book Now</h2>
            </div>
            <form onSubmit={handleSubmit}>
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
                <input
                ref={numberRef}
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-input">
                <input 
                ref={emailRef}
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-input">
                <input 
                ref={addressRef}
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="form-input">
                <textarea name="" placeholder='Details Information' id="" cols="20" rows="5"></textarea>
              </div>
              <button className="btn-submit" type="submit">Book Now</button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BookNow;