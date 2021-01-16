/** @format */

import "./App.css";

import PullDecks from "./components/cardsManagement/PullDecks";
import PullsCards from "./components/cardsManagement/PullsCards";
import Reset from "./components/gameLogic/Reset";
import TableViews from "./components/tableViews/TableViews";
import AddCardsToRoundsHistory from "./components/cardsManagement/AddCardsToRoundsHistory";
import GameSetup from "./components/gameLogic/GameSetup";

const Root = () => {
  return (
    <>
      <PullDecks />
      <PullsCards />
      <AddCardsToRoundsHistory />
      <Reset />
      <GameSetup />
      <TableViews />
    </>
  );
};

export default Root;
