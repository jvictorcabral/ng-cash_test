import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/criptocurrency.css';

function Criptocurrency() {
  const navigate = useNavigate();

  useEffect(() => {
    const initial = () => {
      const userData = localStorage.getItem('user');

      if (!userData) {
        navigate('/');
      }
    };

    initial();
  }, []);

  const goBackHome = () => {
    navigate('/home');
  };

  return (
    <div className="criptocurrency">
      <NavBar />
      <div className="cripto_content">
        <h1>Site em manutenção</h1>
        <h2>Volte mais tarde</h2>
        <button className='go-home_btn' onClick={goBackHome}>página inicial</button>
      </div>
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

export default Criptocurrency;
