
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NavbarContent from './NavbarContent';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3010/client/login', {
                email,
                password
            });
            if (response.data.status) {
                localStorage.setItem('token', response.data.token);
                navigate('/explore');
            } else {
                setError(response.data.message || 'login failed');
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
        <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      
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
        <button type='submit'>Login</button>
        <Link to="/forgotpassword">Forgot Password?</Link>
        {error && <p className='error'>{error}</p>}
        <p >Don't Have an Account?<Link to={'/signup'}> Sign Up</Link></p>
    </form>
    </div>
</div>
</>
  )
}

export default Login
