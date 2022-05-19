/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import TaskCard from '../Components/TaskCard';
import { requestTasks } from '../Services/requests';
import '../Styles/Pages/Task.css';

function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  // redirect to login page if not logged in
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('logged'));
    if (!isLogged) navigate('/');
  });

  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const getTasks = async (userId) => {
      const data = await requestTasks(userId);
      data.tasks.push({ status: 'new' });
      setTasks(data.tasks);
    };

    getTasks(id)
      .catch(console.error);
  }, []);

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
            />
          ))
        }
      </div>
    </div>
  );
}

export default Tasks;
