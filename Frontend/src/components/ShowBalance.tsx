import React, { useEffect, useState } from 'react';

function ShowBalance() {
  const [balance, setBalance] = useState(0);
  const [ocult, setOcult] = useState(false);

  const isOcult = () => {
    setOcult(!ocult);
  };

  useEffect(() => {
    const getBalance = async () => {
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
            accountId: useData.accountId
          })
        };
        const response = await fetch('http://localhost:3000/balance', requestOptions);
        const data = await response.json();

        setBalance(data.balance.replace(/\./, ','));
      }
    };

    getBalance();
  }, []);

  return (
    <div onClick={isOcult} className="ocult_div">
      {!ocult ? (
        <span className="navbar_span">{`R$ ${balance}`}</span>
      ) : (
        <span className="navbar_span ocult">{'R$ ****** '}</span>
      )}
    </div>
  );
}

export default ShowBalance;
