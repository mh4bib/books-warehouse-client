import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className='p-5 m-5'>
            <Spinner animation="grow" size="lg" />
        </div>
    );
};

export default LoadingSpinner;