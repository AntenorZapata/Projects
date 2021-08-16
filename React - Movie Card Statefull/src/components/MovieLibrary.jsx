// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.filterMovieList = this.filterMovieList.bind(this);
    this.addMovie = this.addMovie.bind(this);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    // const { name } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // this.setState({ [name]: value });
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filterMovieList() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movieFilter = movies;

    movieFilter = movieFilter.filter(
      (i) => i.title.toLowerCase().includes(searchText)
      || i.subtitle.toLowerCase().includes(searchText)
      || i.storyline.toLowerCase().includes(searchText),
    );

    if (bookmarkedOnly) {
      movieFilter = movieFilter.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      movieFilter = movieFilter.filter((movie) => movie.genre === selectedGenre);
    }
    return movieFilter;
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovieList();
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.addMovie } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

// searchText: guarda o texto de busca por filmes;
// bookmarkedOnly: um boolean que guarda se é para filtrar por filmes favoritados ou não;
// selectedGenre: guarda o gênero do filme selecionado para poder fazer a filtragem;
// movies: guarda a lista de filmes.

export default MovieLibrary;
