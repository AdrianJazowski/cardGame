/** @format */

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import GameSetup from "../gameLogic/GameSetup";
import {
  pullCardFromDeckForCroupierHand as pullCardFromDeckForCroupierHandAction,
  addCardToRoundsHistory,
  whoTurnIsNowChange,
  setNewCredit,
} from "../../actions/";

const CroupierAi = ({
  playerTurnIsNow,
  croupierHand,
  deckId,
  playerHand,
  cashForWinInThisRound,
  pullCardFromDeckForCroupierHand,
}) => {
  let valueCroupierHand = 0;
  let valueOfMyHand = 0;
  const pullCardFromDeckForCroupierHandMethod = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((response) => {
        const card = response.data.cards[0];
        pullCardFromDeckForCroupierHand(card);
      })

      .catch((err) => console.log(err));
  };
  const checkCroupierValueHand = () => {
    croupierHand.forEach(({ value }) => {
      if (value === "KING" || value === "QUEEN" || value === "JACK") {
        valueCroupierHand += 10;
      } else if (value === "ACE" && valueCroupierHand <= 10) {
        valueCroupierHand += 11;
      } else if (value === "ACE" && valueCroupierHand > 10) {
        valueCroupierHand += 1;
      } else {
        valueCroupierHand += parseInt(value);
      }
    });
    playerHand.forEach(({ value }) => {
      if (value === "KING" || value === "QUEEN" || value === "JACK") {
        valueOfMyHand += 10;
      } else if (value === "ACE" && valueOfMyHand <= 10) {
        valueOfMyHand += 11;
      } else if (value === "ACE" && valueOfMyHand > 10) {
        valueOfMyHand += 1;
      } else {
        valueOfMyHand += parseInt(value);
      }
    });
  };
  const endGame = () => {
    if (
      valueOfMyHand > valueCroupierHand &&
      valueOfMyHand <= 21 &&
      valueCroupierHand !== valueOfMyHand
    ) {
      alert("Wygrałeś");
      setNewCredit(cashForWinInThisRound);
    } else if (
      valueCroupierHand > valueOfMyHand &&
      valueCroupierHand <= 21 &&
      valueCroupierHand !== valueOfMyHand
    ) {
      alert("Przegrałeś");
    }
    <GameSetup />;
  };
  const handleAddCardsFromHandToRoundsHistory = () => {
    const roundToPlayerHistory = playerHand.map((card) => card.code);
    const roundToCroupierHistory = croupierHand.map((card) => card.code);
    const history = {
      roundToPlayerHistory,
      roundToCroupierHistory,
    };
    addCardToRoundsHistory({ history });
  };
  const handleChangeWhoTurnIsNow = () => {
    whoTurnIsNowChange(!playerTurnIsNow);
  };

  const AIThinking = () => {
    checkCroupierValueHand();

    if (valueCroupierHand < 17) {
      console.log(valueCroupierHand);
      pullCardFromDeckForCroupierHandMethod();
    } else {
      endGame();
      handleAddCardsFromHandToRoundsHistory();
      handleChangeWhoTurnIsNow();
    }
  };

  return (
    <div>
      <button onClick={AIThinking}>Stand</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    croupierHand: state.croupierHand,
    croupierRoundsHistory: state.croupierRoundsHistory,
    playerTurnIsNow: state.playerTurnIsNow,
    deckId: state.deck,
    playerHand: state.playerHand,
    playerRoundsHistory: state.playerRoundsHistory,
    cashForWinInThisRound: state.cashForWinInThisRound,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCardToRoundsHistory: (cards) => dispatch(addCardToRoundsHistory(cards)),
    whoTurnIsNowChange: (change) => dispatch(whoTurnIsNowChange(change)),
    pullCardFromDeckForCroupierHand: (card) =>
      dispatch(pullCardFromDeckForCroupierHandAction(card)),
    setNewCredit: (cash) => {
      dispatch(setNewCredit(cash));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CroupierAi);
