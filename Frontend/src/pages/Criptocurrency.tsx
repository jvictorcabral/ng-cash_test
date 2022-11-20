import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/criptocurrency.css';

function Criptocurrency() {
  return (
    <div className='criptocurrency'>
      <NavBar />
      <div className='cripto_content'>
        <h1>Site em manutenção</h1>
        <h2>Volte mais tarde</h2>
      </div>
    </div>
  );
}

export default Criptocurrency;