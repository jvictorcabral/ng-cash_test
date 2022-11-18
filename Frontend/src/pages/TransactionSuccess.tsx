import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

function TransactionSuccess() {
  const navigate = useNavigate();
  const transactionId = useParams();

  useEffect(() => {
    const initial = async () => {
      const userData = localStorage.getItem('user');

    if (userData) {
      const useData = JSON.parse(userData);
      const url = `http://localhost:3000/transaction/${transactionId.id}`;
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: useData.token,
        },
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      
    }
    };
    initial();
    
  }, []);

  const goBackHome = () => {
    navigate('/home')
  }

  const goBackTransaction = () => {
    navigate('/transaction')
  }

  const goHistoryTransaction = () => {
    navigate('/transaction/history')
  }

  return (
    <div className='transaction-success'>
      <NavBar />
      <h1>Transação Realizada com Sucesso</h1>
      {/* <span>{ `` }</span> */}
      <button onClick={ goBackHome }>voltar para a página inicial</button>
      <button onClick={ goBackTransaction }>fazer outra transferência</button>
      <button onClick={ goHistoryTransaction }>ver histórico de Transações</button>
    </div>
  )
}

export default TransactionSuccess