import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type State = {
  list: any;
};

const initialState: State = {
  list: []
};

export const fetchCSV = createAsyncThunk(
  'modules/fetchCSV',
  async (filePath: string, thunk): Promise<void> => {
    const req = new XMLHttpRequest();
    req.open('get', filePath, true);
    req.send(null);

    req.onload = () => {
      convertCSVtoArray(req.responseText);
    };
  }
);

const convertCSVtoArray = (str: string) => {
  let result = [];
  let tmp = str.split('\n');
  for (var i = 0; i < tmp.length; ++i) {
    result[i] = tmp[i].split(',');
  }
  console.log(result)
  return result;
};

const FetchModule = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCSV.fulfilled, (state, action) => {
      return {
        ...state,
        list: action.payload
      };
    });
  }
});

// export const {} = counterModule.actions;

export default FetchModule;
