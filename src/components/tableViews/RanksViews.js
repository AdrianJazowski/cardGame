/** @format */

import React from "react";
import { connect } from "react-redux";

const RanksViews = ({
  playerRoundsHistory,
  croupierRoundsHistory,
  historicalScore,
}) => {
  return (
    <>
      <div>
        <ul>
          <p>Player Hands</p>
          {playerRoundsHistory.map((hand) => {
            return <li key={hand}>{hand}</li>;
          })}
        </ul>
        <ul>
          <p>Croupier Hands</p>
          {croupierRoundsHistory.map((hand) => {
            return <li key={hand}>{hand}</li>;
          })}
        </ul>
      </div>
      <div>
        <p>Historcial Score</p>
        {historicalScore.map((score) => {
          return <p key={score}>{score}</p>;
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    playerRoundsHistory: state.playerRoundsHistory,
    croupierRoundsHistory: state.croupierRoundsHistory,
    historicalScore: state.historicalScore,
  };
};

export default connect(mapStateToProps)(RanksViews);
