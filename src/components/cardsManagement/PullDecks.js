/** @format */

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { pullNewDecks } from "../../actions";

const PullDecks = ({ pullNewDecks }) => {
  const getCardDecks = () => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
      .then((response) => {
        console.log(response);
        const newDecks = response.data.deck_id;
        pullNewDecks(newDecks);
      })
      .catch((err) => console.log(err));
  };
  const handleGetDecks = () => {
    getCardDecks();
  };
  return (
    <div>
      <button onClick={() => handleGetDecks()}>get card</button>
    </div>
  );
};

const mapDispatchToProps = (disptach) => {
  return {
    pullNewDecks: (newDecks) => disptach(pullNewDecks(newDecks)),
  };
};

export default connect(null, mapDispatchToProps)(PullDecks);
