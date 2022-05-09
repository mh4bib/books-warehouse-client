import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Items from '../Items/Items';
import Footer from '../Footer/Footer';
import PiChart from '../PiChart/PiChart';
import profile from '../../images/unnamed (1).png'
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* parallax banner */}
            <div className="parallax">
                <div>
                    <img className='profile-img' src={profile} alt="" />
                    <h1 style={{ color: '#f1db61' }} className=''>BOOK FAIR</h1>
                    <p style={{ color: 'rgba(220,186,76,255)' }} className='profile-para mx-auto'>BOOK FAIR book stock is the oldest and largest book stock in the country. <span className='d-none d-md-block'> We are the solution for all of your book needs.</span></p>
                </div>
            </div>

            {/* components */}
            <Items></Items>
            <PiChart></PiChart>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;