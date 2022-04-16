import React from 'react';
import bannerImg from '../../../../imgaes/robi.png';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='bg-dream-primary '>
           <div className="container ">
           <div className="row">
                <div className="col-lg-6">
                    <h1 className='banner-title'><span className='bg-blue-color px-3 py-2 text-white d-inline-block mb-2'>I AM Md.ROBI</span> Photographer</h1>
                    <p className='fs-5'>I am Robi, a professional photographer with a vast experience in this field. I love photography. Photography is an extremely artistic and passionate field. Only those who can perceive through the frame and look at the real beauty of the photograph can understand the concept behind photography.</p>
                </div>
                <div className="col-lg-6">
                    <img className='banner-img w-100' src={bannerImg} alt="" />
                </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;