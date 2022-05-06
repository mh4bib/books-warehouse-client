import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        

    }
    if(user){
        console.log(user);
        navigate(from, { replace: true });
    }
    if (error) {
        console.log(error);
    }
    return (
        <div className='bg-light login mx-auto my-3 p-3 p-md-5'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} className='text-start'>
                <label>Email</label><br />
                <input className='w-100 mb-3' type="email" name="email" id="" placeholder='Your Email' /><br />
                <label>Password</label><br />
                <input className='w-100 mb-3' type="password" name="password" id="" placeholder='Your Password' /><br />
                <input className='mb-3' type="submit" value="LOGIN" />
            </form>

            <p>Don't have an account? <Link className='text-decoration-none' to={'/register'}>Please Register</Link></p>
            <div className='d-flex justify-content-center align-items-center'><hr className='w-50 d-inline-block' /> <span className='mx-4'>or</span> <hr className='w-50 d-inline-block' /> </div>

            <div>
                <div className='bg-dark w-75 mx-auto text-white p-2 my-3'><FontAwesomeIcon icon={faGoogle} /><span className='ms-2'>Login with Google</span></div>
                <div className='bg-dark w-75 mx-auto text-white p-2'><FontAwesomeIcon icon={faFacebookF} /><span className='ms-2'>Login with Facebook</span></div>
            </div>
        </div>
    );
};

export default Login;