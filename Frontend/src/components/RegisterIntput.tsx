import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterInput() {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isVisibleMessage, setIsVisibleMessage] = useState(false);
  const navigate = useNavigate();
  const THREE = 3;
  const EIGTH = 8;

  const isNotLoginValid = () =>
    username.length < THREE || userPassword.length < EIGTH;

  const buttonLogin = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          password: userPassword,
        }),
      };
      const response = await fetch(
        "http://localhost:3000/users/register",
        requestOptions
      );
      const data = await response.json();
      const { status } = response;
      if (status === 201) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/home");
      } else {
        setIsVisibleMessage(true);
        console.log(data);
        console.log(status);
        
        
      }
    } catch (err) {
      console.log("error ", err);
    }
  };

  return (
    <div>
      <label htmlFor="username"></label>
      <input
        type="text"
        id="username"
        placeholder="Seu username aqui"
        onChange={({ target }) => setUsername(target.value)}
      />

      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        placeholder="sua senha aqui"
        onChange={({ target }) => setUserPassword(target.value)}
      />

      <button disabled={isNotLoginValid()} onClick={buttonLogin}>
        criar conta
      </button>

      <p
        className={
          isVisibleMessage ? "error-message" : "error-message invisible"
        }
      >
        Usuário ou Senha inválida
      </p>
    </div>
  );
}

export default RegisterInput;
