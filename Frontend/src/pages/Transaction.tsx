import React from 'react';
import TransactionInput from '../components/TransactionInput';
import NavBar from '../components/NavBar';
import digitalNG from '../images/digitalWallet.png';
import '../styles/transaction.css';

function Transaction() {
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
