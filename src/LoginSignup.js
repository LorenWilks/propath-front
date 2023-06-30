import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = () => {
    axios
      .post('http://localhost:4000/login', { email, password })
      .then(response => {
        // Handle successful login
        // Redirect to the appropriate page
        history.push('/dashboard');
      })
      .catch(error => {
        // Handle login error
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button onClick={handleLoginSubmit}>Login</Button>
    </div>
  );
}

function SignupForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = () => {
    axios
      .post('http://localhost:4000/signup', { email, password })
      .then(response => {
        // Handle successful signup
        // Redirect to the appropriate page
        history.push('/dashboard');
      })
      .catch(error => {
        // Handle signup error
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button onClick={handleSignupSubmit}>Signup</Button>
    </div>
  );
}

export { LoginForm, SignupForm };
