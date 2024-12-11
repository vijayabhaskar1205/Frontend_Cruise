
import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom';

const ResetPassword = () => {const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    const {token}=useParams();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
            await axios.post(`http://localhost:3010/client/resetpassword/${token}`, { 
                password,
        
            }).then(response=>{
               if (response.data.status) {
                alert("Password reset correctly")
                navigate('/login');
            } console.log(response.data);
        }).
         catch (err=>{
            console.error('Signup error:', err);
           
        })
    };
  return (
    <>
    <div className='form-container'>
        <div className="form-box">
    <h2>Reset Password</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      
    <input
            type="password"
            placeholder=' Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Send</button>
        
    </form>
    </div>
   </div>
</>
  )
}

export default ResetPassword

