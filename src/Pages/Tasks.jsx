/* eslint-disable no-unused-expressions */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import Header from '../Components/Header';
import TaskCard from '../Components/TaskCard';
import NewTask from '../Components/NewTask';
import TasksContext from '../Context/TasksContext';
import '../Styles/Pages/Task.css';
import '../Styles/Components/TaskCard.css';

function Tasks() {
  const navigate = useNavigate();
  const { tasks } = useContext(TasksContext);
  const [createTask, setCreateTask] = useState(false);

  // redirect to login page if not logged in
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('logged'));
    if (!isLogged) navigate('/');
  });

  useEffect(() => setCreateTask(false), []);

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
        {
          createTask ? (<NewTask />) : (
            <div className="task_card new_task">
              <GrAddCircle onClick={() => setCreateTask(true)} size={70} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Tasks;
