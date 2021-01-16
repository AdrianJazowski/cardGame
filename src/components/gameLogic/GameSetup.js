/** @format */

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  pullCardFromDeckForMyHand,
  pullCardFromDeckForCroupierHand,
} from "../../actions";

const GameSetup = ({
  deckId,
  pullCardFromDeckForMyHand,
  pullCardFromDeckForCroupierHand,
}) => {
  const pullCardFromDeckForMyHandMethod = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((response) => {
        const card = response.data.cards[0];
        pullCardFromDeckForMyHand(card);
      })

      .catch((err) => console.log(err));
  };
  const pullCardFromDeckForCroupierHandMethod = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((response) => {
        const card = response.data.cards[0];
        pullCardFromDeckForCroupierHand(card);
      })

      .catch((err) => console.log(err));
  };

  const handleStarterGame = () => {
    pullCardFromDeckForMyHandMethod();
    pullCardFromDeckForCroupierHandMethod();
    pullCardFromDeckForMyHandMethod();
    pullCardFromDeckForCroupierHandMethod();
  };
  return (
    <div>
      <button onClick={() => handleStarterGame()}>Start gry</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deckId: state.deck,
    playerHand: state.playerHand,
    croupierHand: state.croupierHand,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pullCardFromDeckForMyHand: (card) =>
      dispatch(pullCardFromDeckForMyHand(card)),
    pullCardFromDeckForCroupierHand: (card) =>
      dispatch(pullCardFromDeckForCroupierHand(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSetup);
