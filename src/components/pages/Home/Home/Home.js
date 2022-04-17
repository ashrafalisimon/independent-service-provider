import React from 'react';
import Banner from '../Banner/Banner';
import Insta from '../Insta/Insta';
import Service from '../MyService/Service'

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Insta/>
        </div>
    );
};

export default Home;