import React from 'react';
import RegisterInput from '../components/RegisterIntput';
import '../styles/login.css';

function Register() {
  return (
    <div className="register">
      <h1 className="initial-title">{`Cadastre-se no NG Cash`}</h1>
      <RegisterInput />
    </div>
  );
}

export default Register;
