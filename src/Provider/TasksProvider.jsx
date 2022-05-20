/* eslint-disable react/jsx-no-constructed-context-values */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TasksContext from '../Context/TasksContext';
import { requestTasks } from '../Services/requests';

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const { id } = JSON.parse(localStorage.getItem('user'));
      const data = await requestTasks(id);
      setTasks(data.tasks);
    };
    getTasks().catch(console.error);
  }, []);

  const context = {
    tasks,
    setTasks,
  };

  return (
    <TasksContext.Provider value={context}>
      { children }
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default TasksProvider;
