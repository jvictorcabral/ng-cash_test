import React, { useEffect } from 'react';
import LoginInput from '../components/LoginInput';
import Typed from 'typed.js';
import '../styles/login.css';

function Login() {
  useEffect(() => {
    new Typed('.element', {
      strings: ['Bem vindo(a) ao NG Cash', 'A carteira da nova geração'],
      stringsElement: '#typed-strings',
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 1200,
      startDelay: 500,
      loop: true,
    });
  }, []);

  return (
    <div className="login">
      <h1 className="initial-title element" />
      <LoginInput />

      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </div>
  );
}

export default Login;
