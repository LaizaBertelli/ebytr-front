/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import TaskCard from '../Components/TaskCard';
import TasksContext from '../Context/TasksContext';
import '../Styles/Pages/Task.css';

function Tasks() {
  const navigate = useNavigate();
  const { tasks } = useContext(TasksContext);

  // redirect to login page if not logged in
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('logged'));
    if (!isLogged) navigate('/');
  });

  return (
    <div>
      <Header />
      <div className="cards_container">
        {
          tasks.map((task) => (
            <TaskCard
              title={task.title}
              description={task.description}
              status={task.status}
              id={task.id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Tasks;
