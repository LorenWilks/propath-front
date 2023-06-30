// SignupForm.js
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/users', { // Update the endpoint URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Signup successful');
        // Handle successful signup, such as redirecting to a dashboard page
      } else {
        console.log('Signup failed');
        // Handle signup error, such as displaying an error message to the user
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
      <Form.Input
        label="Confirm Password"
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        required
      />
      <Button type="submit" primary>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
