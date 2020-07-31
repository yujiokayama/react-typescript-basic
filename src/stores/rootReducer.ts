import { combineReducers } from "@reduxjs/toolkit";
import counterModule from "./modules/Counter";

const rootReducer = combineReducers({
  Counter: counterModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
