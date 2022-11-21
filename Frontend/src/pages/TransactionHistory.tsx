import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/transactionHistory.css';

function TransactionHistory() {
  const [transactionData, setTransactionData] = useState([
    {
      id: 0,
      debitedAccount: '',
      creditedAccount: '',
      value: '',
      createdAt: ''
    }
  ]);
  const [clicked, setClicked] = useState('check-in');
  const [clickedDate, setClickedDate] = useState('asc');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const initial = () => {

      if (!userData) {
        navigate('/');
      }
    };

    initial();

    const initialFetch = async () => {

      if (userData) {
        const useData = JSON.parse(userData);
        const url1 = 'http://localhost:3000/transaction/history';
        const url2 = 'http://localhost:3000/users';
        const requestOptions = {
          method: 'GET',
          headers: {
            Authorization: useData.token
          }
        };

        const getHistory = await fetch(url1, requestOptions);
        const getUsers = await fetch(url2, requestOptions);

        if (getHistory.status === 200) {
          const history = await getHistory.json();
          const users = await getUsers.json();
          const mapHistory = history.map(
            (element: {
              id: number;
              debitedAccountId: number;
              creditedAccountId: number;
              value: number;
              createdAt: Date;
            }) => {
              const debited = users.find(
                (e: { accountId: number }) => e.accountId === element.debitedAccountId
              );
              const credited = users.find(
                (e: { accountId: number }) => e.accountId === element.creditedAccountId
              );

              return {
                id: element.id,
                debitedAccount: debited.username,
                creditedAccount: credited.username,
                value: element.value,
                createdAt: element.createdAt
              };
            }
          );

          setTransactionData(mapHistory);

          return mapHistory;
        }
      }
    };
    initialFetch();
  }, []);

  const filteringDate = async () => {
    const userData = localStorage.getItem('user');

    if (userData) {
      const useData = JSON.parse(userData);
      const url1 = 'http://localhost:3000/transaction/history/date';
      const url2 = 'http://localhost:3000/users';

      const requestOptions1 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: useData.token
        },
        body: JSON.stringify({
          filter: clickedDate
        })
      };

      const requestOptions2 = {
        method: 'GET',
        headers: {
          Authorization: useData.token
        }
      };

      const getHistory = await fetch(url1, requestOptions1);
      const getUsers = await fetch(url2, requestOptions2);

      const history = await getHistory.json();
      const users = await getUsers.json();

      if (getHistory.status === 200) {
        const mapHistory = history.map(
          (element: {
            id: number;
            debitedAccountId: number;
            creditedAccountId: number;
            value: number;
            createdAt: Date;
          }) => {
            const debited = users.find(
              (e: { accountId: number }) => e.accountId === element.debitedAccountId
            );
            const credited = users.find(
              (e: { accountId: number }) => e.accountId === element.creditedAccountId
            );

            return {
              id: element.id,
              debitedAccount: debited.username,
              creditedAccount: credited.username,
              value: element.value,
              createdAt: element.createdAt
            };
          }
        );

        setTransactionData(mapHistory);
        if (clickedDate === 'asc') {
          setClickedDate('desc');
        } else {
          setClickedDate('asc');
        }

        return mapHistory;
      }
    }
  };

  const filtering = async () => {
    const userData = localStorage.getItem('user');

    if (userData) {
      const useData = JSON.parse(userData);
      const url1 = 'http://localhost:3000/transaction/history';
      const url2 = 'http://localhost:3000/users';

      const requestOptions1 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: useData.token
        },
        body: JSON.stringify({
          filter: clicked
        })
      };

      const requestOptions2 = {
        method: 'GET',
        headers: {
          Authorization: useData.token
        }
      };
      const getHistory = await fetch(url1, requestOptions1);
      const getUsers = await fetch(url2, requestOptions2);

      const history = await getHistory.json();
      const users = await getUsers.json();

      if (getHistory.status === 200) {
        const mapHistory = history.map(
          (element: {
            id: number;
            debitedAccountId: number;
            creditedAccountId: number;
            value: number;
            createdAt: Date;
          }) => {
            const debited = users.find(
              (e: { accountId: number }) => e.accountId === element.debitedAccountId
            );
            const credited = users.find(
              (e: { accountId: number }) => e.accountId === element.creditedAccountId
            );

            return {
              id: element.id,
              debitedAccount: debited.username,
              creditedAccount: credited.username,
              value: element.value,
              createdAt: element.createdAt
            };
          }
        );

        setTransactionData(mapHistory);
        if (clicked === 'check-in') {
          setClicked('check-out');
        } else {
          setClicked('check-in');
        }

        return mapHistory;
      }
    }
  };

  const goBackHome = () => {
    navigate('/home');
  };

  return (
    <div className="transaction-history">
      <div className="table_div">
        <div className="history_btns">
          <button className="history_btn" onClick={filteringDate}>
            {clickedDate === 'asc' ? 'mais recentes' : 'mais antigas'}
          </button>

          <button className="history_btn" onClick={filtering}>
            {clicked === 'check-in' ? 'transações recebidas' : 'transações enviadas'}
          </button>

          <button className="history_btn" onClick={goBackHome}>
            página inicial
          </button>
        </div>

        <table className="table_transactions">
          <thead>
            <tr>
              <th>enviado por</th>
              <th>recebido por</th>
              <th>valor</th>
              <th>data</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((
              { id, creditedAccount, debitedAccount, value, createdAt }) => (
              <tr key={id} className="tr-table">
                <td>{creditedAccount}</td>
                <td>{debitedAccount}</td>
                <td>{value.replace('.', ',')}</td>
                <td>{createdAt.substring(0, 10).split('-').reverse().join('/')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
