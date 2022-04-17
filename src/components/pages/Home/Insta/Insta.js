import React from 'react';
import InstaImg from '../../../../imgaes/instagram-img.jpg'

const Insta = () => {
    return (
        <div className=''>
                <div className="insta-title text-center py-5">
                    <h2 className='fs-2 fw-bold blue-color'>@instagram</h2>
                </div>
                <div>
                    <img className='w-100' src={InstaImg} alt="" />
                </div>
        </div>
    );
};

export default Insta;