import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Criptocurrency from './pages/Criptocurrency';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Transaction from './pages/Transaction';
import TransactionHistory from './pages/TransactionHistory';
import TransactionSuccess from './pages/TransactionSuccess';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/transaction/history" element={<TransactionHistory />} />
      <Route path="/transaction/success/:id" element={<TransactionSuccess />} />
      <Route path="/criptocurrency" element={<Criptocurrency />} />
    </Routes>
  );
}

export default App;
