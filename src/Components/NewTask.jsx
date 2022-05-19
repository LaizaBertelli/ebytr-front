import React from 'react';
import Button from './Button';

function NewTask() {
  const handleNewTask = () => {
    console.log('handle new task clicked');
  };

  return (
    <Button customClass="new_task_button" disabled={false} text="Nova Tarefa" onClick={handleNewTask} />
  );
}

export default NewTask;
