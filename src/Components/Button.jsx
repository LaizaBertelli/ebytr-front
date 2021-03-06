import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Components/Button.css';

function Button({ text, onClick, disabled }) {
  return (
    <button className="button" type="button" disabled={disabled} onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: true,
};

export default Button;
