import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <button className="logout_btn" onClick={logout}>
        sair
      </button>
    </div>
  );
}

export default LogoutBtn;
