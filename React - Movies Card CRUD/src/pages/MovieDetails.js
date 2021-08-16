import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    movieAPI
      .getMovie(params.id)
      .then((data) => this.setState({ data, loading: false }));
  }

  handleDelete(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, data } = this.state;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = data;
    const num = 5;
    console.log(imagePath.slice(0, num));

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={imagePath.slice(0, 5) === 'image' ? `../${imagePath}` : imagePath} />
        <p>{`Subtitle: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={() => this.handleDelete(id)}>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

export default MovieDetails;
