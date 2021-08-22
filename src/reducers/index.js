import artReducer from "./artReducer";
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import transactionsReducer from "./transactionsReducer";
import bidsListReducer from "./bidsListReducer";
import userBidsReducer from "./userBidsReducer";

const rootReducer = combineReducers({
  art: artReducer,
  wallet_amt: amountReducer,
  transactions: transactionsReducer,
  bidsList: bidsListReducer,
  userBids: userBidsReducer,
});

export default rootReducer;
