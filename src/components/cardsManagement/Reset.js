/** @format */

import React from "react";
import { connect } from "react-redux";
import { restartGame } from "../../actions";

const Reset = ({ restartGame }) => {
  const handleRestartGame = () => {
    const storeForRestart = {
      budget: 2000,
      actualHand: [],
      roundsHistory: [],
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
