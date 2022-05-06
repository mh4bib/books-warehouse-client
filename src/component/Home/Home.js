import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Items from '../Items/Items';
import './Home.css';

const Home = () => {
    return (
        <div className='position-relative'>
            <div className="parallax"></div>
            <Items></Items>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;