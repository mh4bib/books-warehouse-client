import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import './Home.css';

const Home = () => {
    return (
        <div className='position-relative'>
            <div className="parallax"></div>

            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;