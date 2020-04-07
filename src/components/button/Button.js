import React from 'react';

const Button = props => {
  return (
    <button
      onClick={props.handleSubmit}
      type={props.type}
      className={props.class}>
      {props.btnValue}
    </button>
  )
}

export default Button;