import React, { useEffect, useRef } from 'react';
import LoginInput from '../components/LoginInput';
import Typed from 'typed.js';
import '../styles/login.css';

function Login() {
  useEffect(() => {
    const typed = new Typed('.element', {
      strings: ['Bem vindo(a) ao NG Cash', 'A carteira da nova geração'],
      stringsElement: '#typed-strings',
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true
    });
  }, []);

  return (
    <div className="login">
      <h1 className="initial-title element" />
      <LoginInput />
    </div>
  );
}

export default Login;
