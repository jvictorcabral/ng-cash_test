import React, { useEffect } from 'react';
import TransactionInput from '../components/TransactionInput';
import NavBar from '../components/NavBar';
import digitalNG from '../images/digitalWallet.png';
import '../styles/transaction.css';
import { useNavigate } from 'react-router-dom';

function Transaction() {
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

  return (
    <div className="transaction">
      <NavBar />
      <section className="transaction_section">
        <TransactionInput />
        <img className="img_transaction" src={digitalNG} alt="" />
      </section>
    </div>
  );
}

export default Transaction;
