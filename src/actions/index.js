/** @format */

import { actionsTypes } from "./actionsTypes";

export const pullNewDecks = (newDecks) => {
  return {
    type: actionsTypes.PULL_DECKS,
    payload: newDecks,
  };
};
export const pullCardFromDeck = (card) => {
  return {
    type: actionsTypes.PULL_CARD,
    payload: card,
  };
};
