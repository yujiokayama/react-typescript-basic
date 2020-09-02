import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
  csvFile: ['list'],
};

/**
 * GET
 */
export const fetchCSV = createAsyncThunk(
  "modules/fetchCSV",
  async (_, thunk) => {
    const res = await fetch(
      "https://storage.googleapis.com/yuji-okayama-dev-test-storage/COVID-19.csv"
    );
    if (res.ok) {
      console.log(res.text())
      return await res.text();
    }
    throw new Error("fetch error");
  }
);

const FetchCSVModule = createSlice({
  name: "fetchcsv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCSV.fulfilled, (state, action) => {
      return {
        ...state,
        csvFile: action.payload,
      };
    });
  },
});

export const {} = FetchCSVModule.actions;

export default FetchCSVModule;
