import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Components/Button.css';

function Button({ text }) {
  return (
    <button className="button" type="button">{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
