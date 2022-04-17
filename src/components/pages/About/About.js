import React from 'react';
import Image from '../../../imgaes/wwwww.png';

const About = () => {
    return (
        <div className='container'>
           <div className="row">
               <div className="col-lg-5">
                   <img className='w-100 rounded-2' src={Image} alt="" />
               </div>
               <div className="col-lg-7 mt-5">
                   <h2 className='fs-2 fw-bold mr-5 mt-5 mb-3'>My Future Goal</h2>
                   <p className='lead'>My future goal is to become a full-stack developer. Enhancing problem solving skills. Anyone working in an IT firm. In addition to studying BSc Engineering. Through this I can gain more skills in the IT world.</p>
               </div>
           </div>
        </div>
    );
};

export default About;