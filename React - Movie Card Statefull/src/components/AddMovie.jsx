// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

import AddMovieSelect from './AddMovieSelect';

const initialState = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: 0,
  imagePath: '',
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleBtn = this.handleBtn.bind(this);

    this.state = initialState;
  }

  handleChangeInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleBtn(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  handleInputs() {
    const { rating, genre } = this.state;
    return (
      <div>
        <Input
          type="number"
          msg="Avaliação"
          dataLabel="rating-input-label"
          on={ this.handleChangeInput }
          dataInput="rating-input"
          value={ rating }
          name="rating"
        />
        <AddMovieSelect genre={ genre } handleChange={ this.handleChangeInput } />
        <button
          type="submit"
          onClick={ this.handleBtn }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <Input
            type="text"
            msg="Título"
            dataLabel="title-input-label"
            on={ this.handleChangeInput }
            dataInput="title-input"
            value={ title }
            name="title"
          />
          <Input
            type="text"
            msg="Subtítulo"
            dataLabel="subtitle-input-label"
            on={ this.handleChangeInput }
            dataInput="subtitle-input"
            value={ subtitle }
            name="subtitle"
          />
          <Input
            type="text"
            msg="Imagem"
            dataLabel="image-input-label"
            on={ this.handleChangeInput }
            dataInput="image-input"
            value={ imagePath }
            name="imagePath"
          />
          <label data-testid="storyline-input-label" htmlFor="textarea">
            Sinopse
            <textarea
              data-testid="storyline-input"
              value={ storyline }
              name="storyline"
              id="textarea"
              cols="30"
              rows="3"
              onChange={ this.handleChangeInput }
            />
          </label>
          {this.handleInputs()}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default AddMovie;
