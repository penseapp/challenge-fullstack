import React from "react";
import PropTypes from 'prop-types';

import "./Input.css";

function Input({value, placeholder, setValue, Icon}) {
  return (
    <div className="input-login">
      <input type="text" placeholder={placeholder} value={value} onChange={({target}) => setValue(target.value)} />
      <Icon />
    </div>
  )
}

Input.propTypes =  {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
  Icon: PropTypes.element,
}

export default Input;