/** @format */

export const loadStateFormStore = () => {
  try {
    const serializedState = localStorage.getItem("storeState");

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveStoreState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("storeState", serializedState);
  } catch {}
};
