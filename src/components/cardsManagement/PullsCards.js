/** @format */

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { pullCardFromDeck } from "../../actions";

const PullsCards = ({ deckId }) => {
  const getCardfromDeck = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleGetCardFromDeck = () => {
    getCardfromDeck();
  };

  return (
    <div>
      <button onClick={() => handleGetCardFromDeck()}>Pull card</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    deckId: state.deck,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pullCardFromDeck: (card) => dispatch(pullCardFromDeck(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PullsCards);
