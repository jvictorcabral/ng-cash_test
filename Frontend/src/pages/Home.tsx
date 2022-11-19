import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import digitalNG from '../images/digitalBank.png';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();

  const transactionBtn = () => {
    navigate('/transaction');
  };

  const goHistoryTransaction = () => {
    navigate('/transaction/history');
  };

  return (
    <div className="home">
      <NavBar />
      <div className="home_content">
        <section className="home_btns">
          <button className="home_btn" onClick={transactionBtn}>
            Fazer Transferência
          </button>

          <button className="home_btn" onClick={goHistoryTransaction}>
            ver histórico de Transações
          </button>

          <button className="home_btn">investir em bitcoin</button>
        </section>

        <img className="img_home" src={digitalNG} alt="" />
      </div>
    </div>
  );
}

export default Home;
