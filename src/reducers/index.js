import artReducer from "./artReducer";
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import transactionsReducer from "./transactionsReducer";

const rootReducer = combineReducers({
  art: artReducer,
  wallet_amt: amountReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
