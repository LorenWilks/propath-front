import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>,

      <footer className="footer">
        <p>&copy; 2023 Pro-Path</p>
      </footer>
  );
}

export default App;
