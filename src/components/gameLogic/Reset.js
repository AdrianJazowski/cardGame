/** @format */

import React from "react";
import { connect } from "react-redux";
import { restartGame } from "../../actions";

const Reset = ({ restartGame }) => {
  const handleRestartGame = () => {
    const storeForRestart = {
      credit: 1000,
      playerHand: [],
      croupierHand: [],
      playerRoundsHistory: [],
      ourBid: 0,
      cashForWinInThisRound: 0,
      croupierRoundsHistory: [],
      deck: null,
      round: 0,
      playerTurnIsNow: true,
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
