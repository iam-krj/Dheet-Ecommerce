import React from "react";

const updateArt = () => {
  return (dispatch) => {
    fetch("/assets/database.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_ART",
          payload: data,
        });
      });
  };
};

//Used when adding money to wallet or returning bid amount
const increaseAmount = (increment) => {
  return {
    type: "INCREASE_AMOUNT",
    payload: increment,
  };
};

//Used to deduct money when NFT is bought
const decreaseAmount = (decrement) => {
  return {
    type: "DECREASE_AMOUNT",
    payload: decrement,
  };
};

//As the name says
const addTransaction = (transaction) => {
  return {
    type: "ADD_TRANSACTION",
    payload: transaction,
  };
};

const addBid = (productId, amount, name) => {
  return {
    type: "ADD_BID",
    payload: {
      productId: productId,
      entry: {
        name: name,
        bid: amount,
      },
    },
  };
};
export { updateArt, increaseAmount, decreaseAmount, addTransaction, addBid };
