import { combineReducers } from "@reduxjs/toolkit";
import counterModule from "./modules/Counter";
import fetchModule from "./modules/Fetch";

const rootReducer = combineReducers({
  Counter: counterModule.reducer,
  Fetch: fetchModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
