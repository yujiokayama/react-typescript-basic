import { combineReducers } from "@reduxjs/toolkit";
import counterModule from "./modules/Counter";
import MemberListModule from "./modules/Fetch";

const rootReducer = combineReducers({
  Counter: counterModule.reducer,
  MemberList: MemberListModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
