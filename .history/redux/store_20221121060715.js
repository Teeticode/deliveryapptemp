import { combineReducers, configureStore } from "@reduxjs/toolkit";

const RootReducers = combineReducers({
    // reducers
})

export const store = configureStore(RootReducers)