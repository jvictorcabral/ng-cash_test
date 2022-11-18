import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home() {
  const navigate = useNavigate();

  const transactionBtn = () => {
    navigate('/transaction')
  }

  return (
    <div className='home'>
      <NavBar />
      <button
        className=''
        onClick={ transactionBtn }
      >
        Fazer Transferência
      </button>
    </div>
  );
}

export default Home;
