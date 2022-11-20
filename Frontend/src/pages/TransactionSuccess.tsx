import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/successTransaction.css';

function TransactionSuccess() {
  const [transactionData, setTransactionData] = useState({
    creditedUser: '',
    debitedUser: '',
    value: '',
    createdAt: ''
  });
  const navigate = useNavigate();
  const transactionId = useParams();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const initial = () => {

      if (!userData) {
        navigate('/');
      }
    };

    initial();

    const initialFetch = async () => {
      const userData = localStorage.getItem('user');

      if (userData) {
        const useData = JSON.parse(userData);
        const url = `http://localhost:3000/transaction/${transactionId.id}`;
        const requestOptions = {
          method: 'GET',
          headers: {
            Authorization: useData.token
          }
        };
        const response = await fetch(url, requestOptions);

        if (response.status === 200) {
          const data = await response.json();

          setTransactionData(data);
          return data;
        }
        navigate('/home');
      }
    };
    initialFetch();
  }, [transactionData]);

  const goBackHome = () => {
    navigate('/home');
  };

  const goBackTransaction = () => {
    navigate('/transaction');
  };

  const goHistoryTransaction = () => {
    navigate('/transaction/history');
  };

  return (
    <div className="transaction-success">
      <NavBar />
      <div className="extract_success">
        <h1 className="extract_title">Transação Realizada com Sucesso</h1>
        <div className="extract_spans">
          <span>{`Quem pagou: ${transactionData.creditedUser}`}</span>
          <span>{`Quem recebeu: ${transactionData.debitedUser}`}</span>
          <span>{`Valor da transferência: R$${transactionData.value.replace('.', ',')}`}</span>
          <span>{`Data da transferência: ${transactionData.createdAt
            .substring(0, 10)
            .split('-')
            .reverse()
            .join('/')}`}</span>
        </div>
        <div className="success_btns">
          <button className="extract_btn" onClick={goBackHome}>
            voltar para a página inicial
          </button>
          <button className="extract_btn" onClick={goBackTransaction}>
            fazer outra transferência
          </button>
          <button className="extract_btn" onClick={goHistoryTransaction}>
            ver histórico de Transações
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionSuccess;
