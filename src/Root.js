/** @format */

import "./App.css";

import PullDecks from "./components/cardsManagement/PullDecks";
import PullsCards from "./components/cardsManagement/PullsCards";

const Root = () => {
  return (
    <>
      <div>działa</div>
      <PullDecks />
      <PullsCards />;{/* <button onClick={getCardDecks2}>get card</button> */}
    </>
  );
};

export default Root;
