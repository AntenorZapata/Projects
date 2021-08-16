import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      type,
      msg,
      id,
      dataLabel,
      value,
      on,
      dataInput,
      checked,
      name,
    } = this.props;
    return (
      <div>
        <label htmlFor={ id } data-testid={ dataLabel }>
          {msg}
        </label>
        <input
          type={ type }
          id={ id }
          value={ value }
          onChange={ on }
          data-testid={ dataInput }
          checked={ checked }
          name={ name }
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  msg: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
}.isRequired;

export default Input;
