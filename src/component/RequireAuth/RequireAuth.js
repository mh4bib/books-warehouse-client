import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your are not verified!!</h3>
            <button
                className='my-small-button mb-3'
                onClick={async () => {
                    await sendEmailVerification(auth);
                    toast('Verification mail sent');
                }}
            >
                Send Verification Email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;