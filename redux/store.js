import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Authreducers from "./reducers";
const RootReducers = combineReducers({
    // reducers
    Authreducers
})

export const store = configureStore(RootReducers)