import React from 'react';
import './AboutUs.css';
import AboutImg from '../../images/about-img.png';
const AboutUs = () => {
    return (
        <div id='about-us' className='row m-0 justify-content-center'>
            <div className="about-img col-12 col-md-4 my-2">
                <img className='' src={AboutImg} alt="" />
            </div>
            <div className="about-desc col-12 col-md-4 my-2">
                <h2>About Us</h2>
                <p className='text-md-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis vitae placeat eos error molestias quaerat hic! Dolorem enim deserunt eligendi quibusdam quasi, tenetur quo iusto nostrum libero qui quae quos. Molestiae consectetur iure veniam fugiat voluptatem laudantium aspernatur architecto, placeat corrupti enim quas nisi doloremque blanditiis commodi distinctio explicabo maiores?</p>
            </div>
        </div>
    );
};

export default AboutUs;