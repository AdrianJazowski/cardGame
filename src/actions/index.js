/** @format */

import { actionsTypes } from "./actionsTypes";

export const pullNewDecks = (newDecks) => {
  return {
    type: actionsTypes.PULL_DECKS,
    payload: newDecks,
  };
};
export const pullCardFromDeckForMyHand = (card) => {
  return {
    type: actionsTypes.PULL_CARD,
    payload: card,
  };
};
export const pullCardFromDeckForCroupierHand = (card) => {
  return {
    type: actionsTypes.PULL_CARD_FOR_CROUPIER,
    payload: card,
  };
};
export const restartGame = (restartSetting) => {
  return {
    type: actionsTypes.RESTART_SETTINGS,
    payload: restartSetting,
  };
};
export const addCardToRoundsHistory = (cards) => {
  return {
    type: actionsTypes.ADD_TO_ROUNDS_HISTORY,
    payload: cards,
  };
};
export const bidBet = (bidCash) => {
  return {
    type: actionsTypes.BID_BET,
    payload: bidCash,
  };
};
