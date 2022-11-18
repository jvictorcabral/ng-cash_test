import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginTransaction() {
  const [username, setUsername] = useState('');
  const [value, setValue] = useState('');
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
          value,
        })
      };
      const response = await fetch('http://localhost:3000/transaction', requestOptions);
      if (response.status === 201) {
        const data = await response.json();
        navigate(`/transaction/success/${data.id}`)
      }
      setIsVisibleMessage(true)
    }
  };

  return (
    <div>
      <label className="" htmlFor="username">
        Username de quem irá receber
      </label>
      <input
        type="text"
        id="username"
        className=""
        placeholder="klovis"
        onChange={({ target }) => setUsername(target.value)}
      />

      <label className="" htmlFor="value">
        Valor a pagar
      </label>
      <input
        type="number"
        id="value"
        className=""
        placeholder="50,00"
        onChange={({ target }) => setValue(target.value)}
      />

      <button className="" onClick={finishTransaction}>
        realizar transferência
      </button>
      <p className={isVisibleMessage ? 'error-message' : 'error-message invisible'}>
        Usuário ou Senha inválida
      </p>
    </div>
  );
}

export default LoginTransaction;
