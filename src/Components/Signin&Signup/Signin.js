import React, { useState } from 'react';
import './Signin.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        user_name: username,
        password: password,
      };

      const response = await fetch('https://localhost:44324/api/Loginpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      const responseData = await response.text();
      onLogin(requestData);
      if (response.ok) {
        // const responseData = await response.json();
        console.log("Login successful");
        console.log("JWT Token:", responseData); // Assuming the token is returned as 'token' property
        // Assuming onLogin accepts the user data
      } else {
        const errorData = await response.json();
       
        // console.log("Error Message:", errorData.message);
      
      }
    } catch (error) {
      console.log("Login failed");
      console.error('An error occurred during login: No user is existing');
     
    }
  };

  return (
    <div className='back'>
      <div className='full-page-content'>
        <div className="login-form-container">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
