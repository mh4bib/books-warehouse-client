import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div>
            <Spinner animation="grow" size="lg" />
        </div>
    );
};

export default LoadingSpinner;