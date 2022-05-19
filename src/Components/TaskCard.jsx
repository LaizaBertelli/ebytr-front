import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import NewTask from './NewTask';
import '../Styles/Components/TaskCard.css';
import '../Styles/Components/Button.css';

function TaskCard({ title, description, status }) {
  const handleEdit = () => {
    console.log('clicked edit');
  };

  const handleDelete = () => {
    console.log('clicked delete');
  };

  if (status === 'new') {
    return (<NewTask />);
  }

  return (
    <div className="task_card">
      <h3>{ title }</h3>
      <p>{ description }</p>
      <p>{ status }</p>
      <section className="task_card_buttons">
        <Button customClass="edit_button" text="Editar" disabled={false} onClick={handleEdit} />
        <Button customClass="delete_button" text="Deletar" disabled={false} onClick={handleDelete} />
      </section>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default TaskCard;
