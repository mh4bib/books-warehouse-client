import React from 'react';
import './AboutUs.css';
import AboutImg from '../../images/banner.jpg';
const AboutUs = () => {
    return (
        <div id='about-us' className='row m-0 justify-content-center'>
            <div className="about-img col-12 col-md-4 my-2">
                <img className='rounded' src={AboutImg} alt="" />
            </div>
            <div className="about-desc col-12 col-md-4 my-2">
                <h2>About Us</h2>
                <p className='text-md-start'>BOOK FAIR book stock is the oldest and largest book stock in the country. Whether you are in college or university BOOK FAIR book stock is the solution for all of your academic book needs. Not only academic books, here you will find a massive collection of all kinds of books around the world. From fiction to medical books, university preparation books to BCS books, local authors’ books to internationally published books, you can find every kind of book at a very low price. Besides almost 2500 bookstalls, you can get low-priced printing, stationery, and educational materials in the BOOK FAIR book stock.</p>
            </div>
        </div>
    );
};

export default AboutUs;