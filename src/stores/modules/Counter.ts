import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type Member = {
  id: number;
  name: string;
  age: number;
};

type State = {
  count: number;
  list: Member[];
};

const initialState: State = {
  count: 0,
  list: []
};

export const fetchAPI = createAsyncThunk(
  'modules/fetchAPI',
  async (arg, thunk) => {
    const res = await fetch('http://localhost:3004/members');
    if (res.ok) {
      return await res.json();
    }
    throw new Error('fetch error');
  }
);

const counterModule = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        count: state.count + action.payload
      };
    },
    decrementCounter: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        count: state.count - action.payload
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPI.fulfilled, (state, action) => {
      return {
        ...state,
        list: action.payload
      };
    });
  }
});

export const { incrementCounter, decrementCounter } = counterModule.actions;

export default counterModule;
