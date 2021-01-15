/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  budget: 2000,
  actualHand: [],
  roundsHistory: [],
  deck: [],
  historicalScore: [],
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
        actualHand: [...state.actualHand, payload],
      };
    // tutaj dodac dodawnie konkretnej karty z api do reki pogrzebac w metodzie w pullsCards

    default:
      return state;
  }
};

export default reducer;
