import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Items from '../Items/Items';
import PiChart from '../PiChart/PiChart';
import profile from '../../images/unnamed (1).png'
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="parallax">
                <div>
                    <img className='profile-img' src={profile} alt="" />
                    <h1 style={{color:'#f1db61'}} className=''>BOOK FAIR</h1>
                    <p style={{color:'rgba(220,186,76,255)'}} className='profile-para mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Maiores, nisi! Lorem ipsum dolor sit amet. <span className='d-none d-md-block'> Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Maiores, nisi!</span></p>
                </div>
            </div>
            <Items></Items>
            <PiChart></PiChart>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;