import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterInput() {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isVisibleMessage, setIsVisibleMessage] = useState(false);
  const navigate = useNavigate();
  const THREE = 3;
  const EIGTH = 8;

  const isNotLoginValid = () => username.length < THREE || userPassword.length < EIGTH;

  const buttonLogin = async () => {
    try {
      const url = 'http://localhost:3000/users/register';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          username,
          password: userPassword
        })
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      const { status } = response;
      if (status === 201) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/home');
      } else {
        setIsVisibleMessage(true);
      }
    } catch (err) {
      console.log('error ', err);
    }
  };

  return (
    <div className="login_input-div">
      <label className="login_label" htmlFor="username">
        Seu username aqui:
      </label>
      <input
        type="text"
        id="username"
        className="login_input"
        placeholder="Klovs"
        onChange={({ target }) => setUsername(target.value)}
      />

      <label className="login_label" htmlFor="password">
        Sua senha aqui:
      </label>
      <input
        type="password"
        id="password"
        className="login_input"
        placeholder="********"
        onChange={({ target }) => setUserPassword(target.value)}
      />

      <button className="btn" disabled={isNotLoginValid()} onClick={buttonLogin}>
        criar conta
      </button>

      <p className={isVisibleMessage ? 'error-message' : 'error-message invisible'}>
        Usuário ou Senha inválida
      </p>
    </div>
  );
}

export default RegisterInput;
