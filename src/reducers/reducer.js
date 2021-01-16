/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  credit: 1000,
  playerHand: [],
  croupierHand: [],
  playerRoundsHistory: [],
  ourBid: 0,
  cashForWinInThisRound: 0,
  croupierRoundsHistory: [],
  deck: null,
  historicalScore: [],
  round: 0,

  // nowe
  // playerHand: []
  // aiHand: []

  // [ 7, 8 10] 0

  // [8, A, 2] 1
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.PULL_DECKS:
      return {
        ...state,
        deck: payload,
      };
    case actionsTypes.PULL_CARD:
      return {
        ...state,
        playerHand: [...state.playerHand, payload],
      };
    case actionsTypes.PULL_CARD_FOR_CROUPIER:
      return {
        ...state,
        croupierHand: [...state.croupierHand, payload],
      };
    case actionsTypes.RESTART_SETTINGS:
      const { credit, playerHand, playerRoundsHistory, deck } = payload;
      return {
        ...state,
        credit: credit,
        playerHand: playerHand,
        playerRoundsHistory: playerRoundsHistory,
        deck: deck,
      };
    case actionsTypes.ADD_TO_ROUNDS_HISTORY:
      return {
        ...state,
        playerRoundsHistory: [state.playerRoundsHistory, payload],
      };

    case actionsTypes.BID_BET:
      const newCredit = state.credit - payload;
      const newCashForWin = state.cashForWinInThisRound + payload;
      return {
        ...state,
        ourBid: payload,
        credit: newCredit,
        cashForWinInThisRound: newCashForWin,
      };
    default:
      return state;
  }
};

export default reducer;
