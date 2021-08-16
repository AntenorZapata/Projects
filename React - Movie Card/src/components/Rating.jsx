// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <p>{ rating }</p>
      </div>
    );
  }
}

// defaultProps based on encurtador.com.br/ahqIV
// fiz isso pra tirar o Warning.

Rating.defaultProps = {
  rating: null,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
