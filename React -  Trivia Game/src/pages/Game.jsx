import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Controller from '../Components/Controller';
import Timer from '../Components/Timer';

class Game extends React.Component {
  render() {
    const { gameData } = this.props;
    return (
      <main>
        <Header />
        { gameData.length ? <Timer /> : null}
        <Controller />
      </main>
    );
  }
}

Game.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  gameData: state.game.gameData,
});

export default connect(mapStateToProps, null)(Game);
