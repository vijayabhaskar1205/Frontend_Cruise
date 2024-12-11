
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NavbarContent from './NavbarContent';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3010/client/forgotpassword', {
                email
            });
            if (response.data.status) {
                alert("check your email for reset password")
                navigate('/login');
            } else {
                console.log('Signup failed'); 
            }
        } catch (err) {
            console.error('Signup error:', err);
            
        }
    };
  return (
    <>
    <NavbarContent/>
    <div className='form-container'>
        <div className="form-box">
        <h2>Forgot Password</h2>
    <form  onSubmit={handleSubmit}>
      
        <input
            type="email"
            placeholder=' Email'
            required
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Send</button>
        
    </form>
    </div>
</div>
</>
  )
}

export default ForgotPassword
