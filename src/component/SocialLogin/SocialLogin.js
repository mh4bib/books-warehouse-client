import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    let errorMessage;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // console.log(error);

    if(user){
        console.log(user);
        navigate(from, { replace: true });
    }
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
    }

    return (
            <div>
                <button onClick={() => signInWithGoogle()} className='bg-dark w-75 mx-auto text-white p-2 my-3'><FontAwesomeIcon icon={faGoogle} /><span className='ms-2'>Login with Google</span></button>
                <button className='bg-dark w-75 mx-auto text-white p-2'><FontAwesomeIcon icon={faFacebookF} /><span className='ms-2'>Login with Facebook</span></button>
                {errorMessage}
            </div>
    );
};

export default SocialLogin;