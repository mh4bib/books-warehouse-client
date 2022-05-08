import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    let notMatched;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(confirmPassword);
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password);
        }
        else{
            notMatched = <span className='text-danger'>Password does not matched</span>;
        }
    }
    if(user){
        navigate(from, { replace: true });
    }
    if (error) {
        errorMessage = <span className='text-danger'>Error: {error?.message}</span>;
    }
    return (
        <div>
            <div className='login mx-auto my-3 p-3 p-md-5  my-form'>
                <h2>Please Register</h2>
                <form onSubmit={handleRegister} className='text-start'>
                    <label>Name</label><br />
                    <input className='w-100 mb-3' type="text" name="name" id="" placeholder='Your Name' /><br />
                    <label>Email</label><br />
                    <input className='w-100 mb-3' type="email" name="email" id="" placeholder='Your Email' /><br />
                    <label>Password</label><br />
                    <input className='w-100 mb-3' type="password" name="password" id="" placeholder='Your Password' /><br />
                    <label>Confirm Password</label><br />
                    <input className='w-100 mb-3' type="password" name="confirmPassword" id="" placeholder='Confirm Password' /><br />
                    {errorMessage}{notMatched}
                    <input className='mb-3 my-small-button' type="submit" value="REGISTER" />
                </form>

                <p>Already have an account? <Link className='text-decoration-none' to={'/login'}>Please Login</Link></p>
                <div className='d-flex justify-content-center align-items-center'><hr className='w-50 d-inline-block' /> <span className='mx-4'>or</span> <hr className='w-50 d-inline-block' /> </div>

                <div>
                    <div className='bg-dark w-75 mx-auto text-white p-2 my-3'><FontAwesomeIcon icon={faGoogle} /><span className='ms-2'>Login with Google</span></div>
                    <div className='bg-dark w-75 mx-auto text-white p-2'><FontAwesomeIcon icon={faFacebookF} /><span className='ms-2'>Login with Facebook</span></div>
                </div>
            </div>
        </div>
    );
};

export default Register;