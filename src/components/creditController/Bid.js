/** @format */

import React from "react";
import { connect } from "react-redux";
import { bidBet } from "../../actions";
import PullsCards from "../cardsManagement/PullsCards";
import CroupierAi from "../gameLogic/CroupierAi";

const Bid = ({ bidBet, credit, ourBid }) => {
  const handleHit = (e) => {
    e.preventDefault();
    const bidToBePlaced = parseInt(e.target.bid.value);
    bidBet(bidToBePlaced);
  };
  const handleDoubleDown = () => {
    const doubleDown = ourBid * 2;
    bidBet(doubleDown);
  };

  return (
    <div className="bidsWrapper">
      <form onSubmit={handleHit}>
        <input type number name="bid" placeholder="Bid " />
        <button type="submit">BID</button>
      </form>
      <button onClick={() => handleDoubleDown()}>Double Down</button>
      <PullsCards />
      <CroupierAi />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    credit: state.credit,
    ourBid: state.ourBid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bidBet: (bidCash) => dispatch(bidBet(bidCash)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bid);
