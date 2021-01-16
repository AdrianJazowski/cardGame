/** @format */

// /** @format */

// import axios from "axios";
// import React from "react";
// import { connect } from "react-redux";
// import { pullCardFromDeck } from "../../actions";

// const pullOneCardFromDeck = ({ deckId, pullCardFromDeck, playerHand }) => {
//   return axios
//     .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//     .then((response) => {
//       const card = response.data.cards[0];
//       pullCardFromDeck(card);
//     })

//     .catch((err) => console.log(err));
// };
// const mapStateToProps = (state) => {
//   return {
//     deckId: state.deck,
//     playerHand: state.playerHand,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     pullCardFromDeck: (card) => dispatch(pullCardFromDeck(card)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(pullOneCardFromDeck);
