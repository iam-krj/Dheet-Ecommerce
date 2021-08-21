import artReducer from "./artReducer";
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import transactionsReducer from "./transactionsReducer";
import bidsListReducer from "./bidsListReducer";

const rootReducer = combineReducers({
  art: artReducer,
  wallet_amt: amountReducer,
  transactions: transactionsReducer,
  bidsList: bidsListReducer,
});

export default rootReducer;
