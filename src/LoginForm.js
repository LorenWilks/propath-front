// LoginForm.js
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/users/sign_in', { // Update the endpoint URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        // Handle successful login, such as redirecting to a dashboard page
      } else {
        console.log('Login failed');
        // Handle login error, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('An error occurred', error);
      // Handle network or server errors
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Form.Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
