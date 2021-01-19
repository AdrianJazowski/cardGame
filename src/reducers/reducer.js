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
  playerTurnIsNow: true,
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
      // const { credit, playerHand, playerRoundsHistory, deck } = payload;
      return {
        ...state,
        ...payload,
      };
    case actionsTypes.ADD_TO_ROUNDS_HISTORY:
      return {
        ...state,
        playerRoundsHistory: [
          state.playerRoundsHistory,
          payload.roundToPlayerHistory,
        ],
        croupierRoundsHistory: [
          state.croupierRoundsHistory,
          payload.roundToCroupierHistory,
        ],
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
    case actionsTypes.CHANGE_WHO_TURN_IS_NOW:
      return {
        ...state,
        playerTurnIsNow: payload,
      };
    case actionsTypes.SET_NEW_CREDIT:
      return {
        ...state,
        credit: state.credit + payload,
      };
    default:
      return state;
  }
};

export default reducer;
