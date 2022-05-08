// import axios from 'axios';
import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios');

const Login = () => {
    const emailRef = useRef("");
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

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/token', { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error) {
        errorMessage = <span className='text-danger'>Error: {error?.message}</span>;
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        }
        else {
            toast("pleas enter your email");
        }
    };
    return (
        <div className='my-form login mx-auto my-3 p-3 p-md-5'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} className='text-start'>
                <label>Email</label><br />
                <input className='w-100 mb-3' type="email" name="email" id="" ref={emailRef} placeholder='Your Email' /><br />
                <label>Password</label><br />
                <input className='w-100 mb-3' type="password" name="password" id="" placeholder='Your Password' /><br />
                {errorMessage}
                <input className='mb-3 my-small-button' type="submit" value="LOGIN" />
            </form>

            <p>Don't have an account? <Link className='text-decoration-none' to={'/register'}>Please Register</Link></p>
            <Button
                style={{
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "rgb(0, 160, 0)",
                }}
                className="btn btn-link p-0"
                onClick={resetPassword}
            >
                reset password
            </Button>
            <div className='d-flex justify-content-center align-items-center'><hr className='w-50 d-inline-block' /> <span className='mx-4'>or</span> <hr className='w-50 d-inline-block' /> </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;