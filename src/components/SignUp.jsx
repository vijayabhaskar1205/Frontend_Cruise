import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/authentication.css'
import NavbarContent from './NavbarContent';
import Footer from './Footer';
const SignUp = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3010/client/signup', {
                username,
                email,
                password
            });
            if (response.data.status) {
                navigate('/login');
            } else {
                setError(response.data.message || 'Signup failed');
            }
        } catch (err) {
            console.error('Signup error:', err);
            setError('An error occurred during signup. Please try again.');
        }
    };

    return (
        <>
        <NavbarContent/>
        <div className='form-container'>
            <div className="form-box">
            <h2>Sign Up</h2>
            <form  onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=' Name'
                    required
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder=' Email'
                    required
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder=' Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='authen-btn'>Sign Up</button>
                {error && <p className='error'>{error}</p>}
                <p>Have an Account?  <Link to={'/login'}>Login</Link></p>
               
            </form>
            </div>
        </div>
      
        </>
    );
};

export default SignUp;
