/** @format */

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { pullCardFromDeckForMyHand } from "../../actions";

const PullsCards = ({ deckId, pullCardFromDeckForMyHand, playerHand }) => {
  const getCardfromDeck = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((response) => {
        const card = response.data.cards[0];
        pullCardFromDeckForMyHand(card);
      })

      .catch((err) => console.log(err));
  };

  const handleGetCardFromDeck = () => {
    getCardfromDeck();
  };

  return (
    <div>
      <button onClick={() => handleGetCardFromDeck()}>Hit</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    deckId: state.deck,
    playerHand: state.playerHand,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pullCardFromDeckForMyHand: (card) =>
      dispatch(pullCardFromDeckForMyHand(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PullsCards);
