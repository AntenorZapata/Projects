// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <Input
            type="text"
            msg="Inclui o texto"
            dataLabel="text-input-label"
            id="filter"
            value={ searchText }
            on={ (e) => onSearchTextChange(e) }
            dataInput="text-input"
            name="searchText"
          />
          <Input
            type="checkbox"
            msg="Mostrar somente favoritos"
            dataLabel="checkbox-input-label"
            checked={ bookmarkedOnly }
            on={ onBookmarkedChange }
            dataInput="checkbox-input"
            name="bookmarkedOnly"
          />
          <Select
            onSelectedGenreChange={ onSelectedGenreChange }
            selectedGenre={ selectedGenre }
            name="selectedGenre"
          />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.bool.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}.isRequired;

export default SearchBar;
