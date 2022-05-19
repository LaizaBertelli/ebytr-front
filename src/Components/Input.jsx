import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Components/Input.css';

function Input({
  id, type, name, value, label,
}) {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>
      <input className="input" type={type} id={id} name={name} value={value} />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
