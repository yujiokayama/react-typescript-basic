import { combineReducers } from "@reduxjs/toolkit";
import counterModule from "./modules/Counter";
import MemberListModule from "./modules/Member";
import FetchCSV from "./modules/FetchCSV";


const rootReducer = combineReducers({
  Counter: counterModule.reducer,
  MemberList: MemberListModule.reducer,
  FetchCSV: FetchCSV.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
