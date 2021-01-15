/** @format */

import React from "react";
import { connect } from "react-redux";

const TableViews = ({ budget, playerHand, roundsHistory }) => {
  return (
    <>
      <ul>
        {playerHand.map((hand) => {
          const { image } = hand;
          return (
            <li>
              <img src={image}></img>
            </li>
          );
        })}
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    budget: state.budget,
    playerHand: state.actualHand,
    roundsHistory: state.roundsHistory,
  };
};

export default connect(mapStateToProps)(TableViews);
