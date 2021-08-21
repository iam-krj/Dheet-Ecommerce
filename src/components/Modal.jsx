import "./modal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBid, decreaseAmount, addTransaction } from "../actions";

export default function Modal({
  show,
  setShow,
  productId = 10,
  name = "Raju",
  highest_bid = 0.66,
  productName = "sexyNFT",
}) {
  const placedBid = (amount = 100, productName = "sexy NFT") => {
    // Fetch deduct from somewhere
    const deduct = amount;
    if (deduct > 0) {
      const now = new Date();
      const date =
        now.getDate() +
        "/" +
        parseInt(now.getMonth() + 1) +
        "/" +
        now.getFullYear();
      const time =
        ("0" + now.getHours()).slice(-2) +
        ":" +
        ("0" + now.getMinutes()).slice(-2) +
        ":" +
        ("0" + now.getSeconds()).slice(-2) +
        " " +
        "UTC" +
        +now.getTimezoneOffset() / 60;
      dispatch(decreaseAmount(deduct));
      dispatch(
        addTransaction({
          transactionID: Math.floor((Math.random() + 1) * 1000000000),
          description: "Placed in bid",
          amount: deduct,
          increment: false,
          product: productName, //Add product
          date: date + " " + time,
        })
      );
    }
  };

  const dispatch = useDispatch();
  const wallet_amt = useSelector((state) => state.wallet_amt);
  const [bid, setBid] = useState(0);
  return (
    <>
      <div id="modal" class={show ? " " : "hide"}>
        <span id="close_button" onClick={() => setShow(false)}>
          +
        </span>
        <div className="wallet_display">Wallet : {wallet_amt} ETH </div>
        <div className="bid_display">
          Current Highest Bid : {highest_bid} ETH{" "}
        </div>
        <div className="inputs">
          <label> Amount : </label>
          <input
            id="bid_amount"
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => {
              setBid(e.target.value);
            }}
          ></input>
          <br />
          <input id="anony" type="checkbox"></input>{" "}
          <span style={{ fontSize: "0.8rem" }}>Bid Anonymously</span>
        </div>
        <button
          className="button"
          onClick={() => {
            const anonymous = document.getElementById("anony").checked;
            if (bid > highest_bid && bid <= wallet_amt) {
              if (anonymous) dispatch(addBid(productId, bid, "Anonymous"));
              else dispatch(addBid(productId, bid, name));
              setShow(false);
              placedBid(bid, productName);
            }
          }}
        >
          Place Bid
        </button>
        <div>
          {bid <= highest_bid ? (
            <li style={{ color: "red" }}>
              The Bid Amount must be greater than current Highest Bid
            </li>
          ) : (
            ""
          )}
          {bid > wallet_amt ? (
            <li style={{ color: "red" }}>Not enough money in the wallet</li>
          ) : (
            ""
          )}
        </div>
      </div>
      <div id="modal_bg" class={show ? " " : "hide"}></div>
    </>
  );
}
