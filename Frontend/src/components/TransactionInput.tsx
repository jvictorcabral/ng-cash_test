import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginTransaction() {
  const [username, setUsername] = useState('');
  const [valueTransaction, setValueTransaction] = useState(0);
  const [isVisibleMessage, setIsVisibleMessage] = useState(false);
  const navigate = useNavigate();

  const finishTransaction = async () => {
    const userData = localStorage.getItem('user');

    if (userData) {
      const useData = JSON.parse(userData);
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: useData.token
        },
        body: JSON.stringify({
          debitedAccount: username,
          creditedAccount: useData.username,
          value: Number(valueTransaction)
        })
      };
      const response = await fetch('http://localhost:3000/transaction', requestOptions);
      if (response.status === 201) {
        const data = await response.json();
        navigate(`/transaction/success/${data.id}`);
      }
      setIsVisibleMessage(true);
    }
  };

  return (
    <div className="transaction_input-div">
      <label className="transaction_label" htmlFor="username">
        Username de quem irá receber
      </label>
      <input
        type="text"
        id="username"
        className="transaction_input"
        placeholder="klovis"
        onChange={({ target }) => setUsername(target.value)}
      />

      <label className="transaction_label" htmlFor="value">
        Valor a pagar
      </label>
      <input
        type="number"
        id="value"
        className="transaction_input"
        placeholder="50,00"
        onChange={({ target }) => setValueTransaction(target.value as unknown as number)}
      />

      <button className="transaction_btn" onClick={finishTransaction}>
        realizar transferência
      </button>
      <p className={isVisibleMessage ? 'error-message' : 'error-message invisible'}>
        Erro: Verifique os campos e tente novamente
      </p>
    </div>
  );
}

export default LoginTransaction;
