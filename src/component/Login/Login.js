import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorMessage;

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
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        errorMessage = <span className='text-danger'>Error: {error?.message}</span>;
    }
    return (
        <div className='bg-light login mx-auto my-3 p-3 p-md-5'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} className='text-start'>
                <label>Email</label><br />
                <input className='w-100 mb-3' type="email" name="email" id="" placeholder='Your Email' /><br />
                <label>Password</label><br />
                <input className='w-100 mb-3' type="password" name="password" id="" placeholder='Your Password' /><br />
                {errorMessage}
                <input className='mb-3' type="submit" value="LOGIN" />
            </form>

            <p>Don't have an account? <Link className='text-decoration-none' to={'/register'}>Please Register</Link></p>
            <div className='d-flex justify-content-center align-items-center'><hr className='w-50 d-inline-block' /> <span className='mx-4'>or</span> <hr className='w-50 d-inline-block' /> </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;