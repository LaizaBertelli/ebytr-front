/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import TasksContext from '../Context/TasksContext';
import { requestCreateTask } from '../Services/requests';
import Button from './Button';

function NewTask() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleNewTask = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const data = await requestCreateTask(id, status, description, title);
    setTasks([...tasks, data]);
  };

  return (
    <div>
      <input name="title" type="text" placeholder="Título" onKeyUp={({ target }) => setTitle(target.value)} />
      <textarea name="description" placeholder="descrição" maxLength="140" onKeyUp={({ target }) => setDescription(target.value)} />
      <input name="status" type="text" placeholder="status" onKeyUp={({ target }) => setStatus(target.value)} />
      <Button customClass="new_task_button" disabled={false} text="Criar" onClick={handleNewTask} />
    </div>
  );
}

export default NewTask;
