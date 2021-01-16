/** @format */

import React from "react";
import { connect } from "react-redux";
import Bid from "../creditController/Bid";
import "./tableViews.css";

const TableViews = ({
  credit,
  playerHand,
  croupierHand,
  playerRoundsHistory,
}) => {
  let valueOfMyHand = 0;
  let valueCroupierHand = 0;

  playerHand.forEach(({ value }) => {
    if (value === "KING" || value === "QUEEN" || value === "JACK") {
      valueOfMyHand += 10;
    } else if (value === "ACE" && valueOfMyHand <= 10) {
      valueOfMyHand += 11;
    } else if (value === "ACE" && valueOfMyHand > 10) {
      valueOfMyHand += 1;
    } else {
      valueOfMyHand += parseInt(value);
    }
  });
  croupierHand.forEach(({ value }) => {
    if (value === "KING" || value === "QUEEN" || value === "JACK") {
      valueCroupierHand += 10;
    } else if (value === "ACE" && valueCroupierHand <= 10) {
      valueCroupierHand += 11;
    } else if (value === "ACE" && valueCroupierHand > 10) {
      valueCroupierHand += 1;
    } else {
      valueCroupierHand += parseInt(value);
    }
  });

  return (
    <>
      <div className="wrapperForCards">
        <p>croupier</p>
        <p>{valueCroupierHand}</p>
        <ul className="ourHands">
          {croupierHand.map((hand) => {
            const { image, value } = hand;
            return (
              <li key={value}>
                <img className="cardPhoto" src={image}></img>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="wrapperForCards">
        <p>My hand</p>
        <p>{valueOfMyHand}</p>
        <ul className="ourHands">
          {playerHand.map((hand) => {
            const { image, value } = hand;
            return (
              <li key={value}>
                <img className="cardPhoto" src={image}></img>
              </li>
            );
          })}
        </ul>
        <Bid />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    credit: state.credit,
    playerHand: state.playerHand,
    playerRoundsHistory: state.playerRoundsHistory,
    croupierHand: state.croupierHand,
  };
};

export default connect(mapStateToProps)(TableViews);
