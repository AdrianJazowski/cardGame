/** @format */

import "./Root.css";

import PullDecks from "./components/cardsManagement/PullDecks";
import Reset from "./components/gameLogic/Reset";
import TableViews from "./components/tableViews/TableViews";
import GameSetup from "./components/gameLogic/GameSetup";
import Bid from "./components/creditController/Bid";
import RanksViews from "./components/tableViews/RanksViews";

const Root = () => {
  // window.onbeforeunload = () => {
  //   alert("tab closed");
  // };

  return (
    <div className="gameWrapper">
      <div>
        <PullDecks />
        <GameSetup />
      </div>
      <div className="tableViews">
        <TableViews />
      </div>
      <div className="actionsWrapper">
        <Bid />
        <Reset />
      </div>
      <div className="rankViews">
        <RanksViews />
      </div>
    </div>
  );
};

export default Root;
