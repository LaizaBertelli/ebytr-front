import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function Tasks() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('logged'));
    if (!isLogged) navigate('/');
    console.log(isLogged);
  });
  return (
    <div>
      <Header />
    </div>
  );
}

export default Tasks;
