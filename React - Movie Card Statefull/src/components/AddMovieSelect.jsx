import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="select">
          Gênero
          <select
            id="select"
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,

}.isRequired;

export default Select;
