import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GrAddCircle } from 'react-icons/gr';
import '../Styles/Components/TaskCard.css';
import '../Styles/Components/Button.css';
import Button from './Button';
import { requestDeleteTask } from '../Services/requests';
import TasksContext from '../Context/TasksContext';

function TaskCard({
  title, description, status, id,
}) {
  const { tasks, setTasks } = useContext(TasksContext);
  const handleDelete = async () => {
    await requestDeleteTask(id);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([...newTasks]);
  };

  if (status === 'new') {
    return (
      <div className="task_card new_task">
        <GrAddCircle size={70} />
      </div>
    );
  }

  return (
    <div className="task_card">
      <h3>{ title }</h3>
      <p>{ description }</p>
      <p>{ status }</p>
      <section>
        <Button text="Deletar" disabled={false} customClass="delete_button" onClick={handleDelete} />
      </section>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default TaskCard;
