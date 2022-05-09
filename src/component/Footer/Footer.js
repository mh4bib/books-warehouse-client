import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { faLocation, faLocationDot, faLocationPin, faLocationPinLock, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <footer style={{ color: '#b98632' }} className='row m-0 bg-dark'>
            {/* Quick link  */}
            <div className='col-12 col-md-6 mt-4'>
                <h3>Quick Links</h3>
                <Link style={{ color: '#b98632' }} className='text-decoration-none mx-3' to={"/"}>HOME</Link>
                <Link style={{ color: '#b98632' }} className='text-decoration-none mx-3' to={"/manage-inventories"}>MANAGE ITEMS</Link>
                <Link style={{ color: '#b98632' }} className='text-decoration-none mx-3' to={"/blogs"}>BLOGS</Link> <br />
                <FontAwesomeIcon className='fs-2 mx-3 mt-3' icon={faFacebook} />
                <FontAwesomeIcon className='fs-2 mx-3 mt-3' icon={faGithub} />
                <FontAwesomeIcon className='fs-2 mx-3 mt-3' icon={faYoutube} />
            </div>
            {/* contact */}
            <div className='col-12 col-md-6 mt-4'>
                <h3>Contacts</h3>
                <p className='mb-2'><FontAwesomeIcon className='fs-5 me-2' icon={faPhone} /> Pone: 0177777777</p>
                <p className='mb-2'><FontAwesomeIcon className='fs-5 me-2' icon={faEnvelope} /> Email: iamjim136@gmail.com</p>
                <p className='mb-2'><FontAwesomeIcon className='fs-5 me-2' icon={faLocationDot} />Adress: Banani, Dhaka</p>
            </div>
            {/* right */}
            <div className='col-12 mt-3 text-muted'>
                <p style={{ color: '#b98632' }}><small>&copy; 2022 all right reserved  BOOK FAIR</small></p>
            </div>
        </footer>
    );
};

export default Footer;