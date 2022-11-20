import React, { useEffect } from 'react';
import Typed from 'typed.js';
import RegisterInput from '../components/RegisterIntput';
import '../styles/login.css';

function Register() {
  useEffect(() => {
    new Typed('.element', {
      strings: ['Cadastre-se no NG Cash', 'A carteira da nova geração'],
      stringsElement: '#typed-strings',
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true
    });
  }, []);

  return (
    <div className="register">
      <h1 className="initial-title element" />
      <RegisterInput />
    </div>
  );
}

export default Register;
