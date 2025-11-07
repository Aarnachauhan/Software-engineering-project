import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { backend } from '../../App';


export const backendUrl= 'http://localhost:4000'


const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login/signup
    console.log(`${currentState} successful!`);
    navigate("/complaint"); // Redirect to complaint page
  };

  
  
  
  return (
    <div>
      <form className='auth-form' onSubmit={handleSubmit}>
        <div className="form-header">
          <p className='form-title'>{currentState}</p>
        </div>

        {currentState === 'Login' ? null : (
          <input type="text" className='form-input' placeholder="Full name" 
        required />
        )}

        <input type="email" className='form-input' placeholder="College email id"
       
         required />
        <input type="password"
        
        className="form-input" placeholder="Enter your password" required />

        <div className="form-footer">
          <p className='fgt-password'>Forget password?</p>
          {currentState === 'Login' ? (
            <p
              className='toggle-auth-state'
              onClick={() => setCurrentState('Sign Up')}
            >
              Create Account
            </p>
          ) : (
            <p
              className='toggle-auth-state'
              onClick={() => setCurrentState('Login')}
            >
              Login Here
            </p>
          )}
        </div>

        <button type="submit" className="form-button">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;

