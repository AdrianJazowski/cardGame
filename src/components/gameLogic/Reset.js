/** @format */

import React from "react";
import { connect } from "react-redux";
import { restartGame } from "../../actions";

const Reset = ({ restartGame }) => {
  const handleRestartGame = () => {
    const storeForRestart = {
      credit: 1000,
      playerHand: [],
      playerRoundsHistory: [],
      deck: [],
    };
    restartGame(storeForRestart);
  };

  return (
    <div>
      <button onClick={() => handleRestartGame()}>Restart</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    restartGame: (restartSettings) => dispatch(restartGame(restartSettings)),
  };
};

export default connect(null, mapDispatchToProps)(Reset);
