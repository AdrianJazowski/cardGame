/** @format */

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/reducer";
import { loadStateFormStore, saveStoreState } from "../utils/localStorageStore";
import throttle from "lodash.throttle";

const persistedState = loadStateFormStore();

const store = createStore(reducer, persistedState, composeWithDevTools());

store.subscribe(
  throttle(() => {
    saveStoreState(store.getState());
  }, 1000)
);

export default store;
