import "./productpage.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
export default function ProductPage({ setPage }) {
  function secondsToTime(secs) {
    const hours = Math.floor(secs / (60 * 60));

    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);

    const obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  // Fethc image,productName,productOwner, productId, description, username, endTime
  const image =
    "https://lh3.googleusercontent.com/3_Ca9zjGbUZ4K3QwTi2vIJnmYkS56DNMdeYtVbYEIMSxshqiKWYBbS8ZSHsYFeQGH_Zg4_CFH4r1FyyDHxJ1gCpknKqJf8uacMbDYA=w600";
  const productName = "Space Punk";
  const productOwner = "Spacepunks";
  const productId = 10;
  const description = "Very good NFT";
  const now = new Date();
  const username = "Hero"; //Add here
  const endTime = secondsToTime(
    Math.floor((now.getTime() % 31536000000) / 1000)
  );

  const bidsList = useSelector((state) => state.bidsList)[productId - 1];
  let highest = -1;
  for (let i = 0; i < bidsList.length; i++) {
    highest = Math.max(highest, bidsList[i].bid);
  }

  const [show, setShow] = useState(false);

  return (
    <div className="productpage">
      <div className="top">
        <div className="image">
          <img src={image} alt="" height="100%"></img>
        </div>
        <div className="productinfo">
          <h1 style={{ display: "inline-block" }}>
            {productName} #{productId}
          </h1>
          <span> by {productOwner}</span>
          <hr />
          <div className="buyingdiv">
            <div className="left">
              <div style={{ fontSize: "1.5rem" }}>Current Highest Bid : </div>
              <div style={{ transform: "translateX(-10%)" }}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/ethereum-1-283135.png"
                  alt=""
                  size="100"
                  style={{ width: "60px", transform: "translateY(-20%)" }}
                ></img>
                <span
                  style={{
                    color: "black",
                    fontSize: "3rem",
                    fontWeight: "500",
                  }}
                >
                  {highest}
                </span>
              </div>
              <div>
                <button className="button" onClick={() => setShow(true)}>
                  Place a bid
                </button>
              </div>
            </div>
            <div className="right">
              <div>Ends in:</div>
              <h1>
                {endTime.h}:{endTime.m}:{endTime.s}
              </h1>
            </div>
          </div>
          <div className="description">
            <div
              style={{
                padding: "10px 0px 0px 20px",
                fontWeight: "700",
                fontSize: "1.2rem",
              }}
            >
              Description
            </div>
            <hr />
            <div className="desc" style={{ padding: "0px 20px" }}>
              {description}
            </div>
          </div>
        </div>
      </div>
      <div className="listings">
        <div
          style={{
            padding: "15px 0px 0px 20px",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          Listings
        </div>
        <hr></hr>
        <table
          class="table table-striped"
          stlye={{ borderCollapse: "initial" }}
        >
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Amount</th>
              <th>In INR</th>
              <th>Bidder</th>
            </tr>
          </thead>
          <tbody>
            {bidsList.map((item, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <th>{item.bid}</th>
                  <th>{item.bid}</th>
                  <th>{item.name}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        show={show}
        setShow={setShow}
        highest_bid={highest}
        name={username}
        productId={productId}
        productName={productName}
      />
      <button
        onClick={() => setPage("wallet")}
        style={{ position: "absolute", marginLeft: "0px", padding: "10px" }}
      >
        Wallet
      </button>
    </div>
  );
}
