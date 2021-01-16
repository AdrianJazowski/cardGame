/** @format */

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { addCardToRoundsHistory } from "../../actions";

const AddCardsToRoundsHistory = ({
  deckId,
  playerHand,
  addCardToRoundsHistory,
  playerRoundsHistory,
}) => {
  const handleAddCardsFromHandToRoundsHistory = () => {
    const roundHistory = playerHand.map((card) => card.code);
    addCardToRoundsHistory(roundHistory);
  };

  return (
    <div>
      <button onClick={() => handleAddCardsFromHandToRoundsHistory()}>
        Add to pile
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deckId: state.deck,
    playerHand: state.playerHand,
    playerRoundsHistory: state.playerRoundsHistory,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCardToRoundsHistory: (card) => dispatch(addCardToRoundsHistory(card)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardsToRoundsHistory);
