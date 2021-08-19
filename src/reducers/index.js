import artReducer from "./artReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    art: artReducer,
});

export default rootReducer;