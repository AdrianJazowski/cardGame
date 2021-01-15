/** @format */

import "./App.css";

import PullDecks from "./components/cardsManagement/PullDecks";
import PullsCards from "./components/cardsManagement/PullsCards";
import Reset from "./components/cardsManagement/Reset";
import TableViews from "./components/tableViews/TableViews";

const Root = () => {
  return (
    <>
      <PullDecks />
      <PullsCards />
      <Reset />
      <TableViews />
    </>
  );
};

export default Root;
