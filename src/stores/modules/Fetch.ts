import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type Member = {
  id: any;
  name: string;
  age: number;
};

type newMember = {
  name: string | null;
  age: number | null;
};

type State = {
  newMember: newMember;
  member: Member[];
};

const initialState: State = {
  newMember: {
    name: null,
    age: null,
  },
  member: [],
};

export const fetchMembers = createAsyncThunk(
  "modules/fetchMembers",
  async (arg, thunk) => {
    const res = await fetch(
      "https://test-restapi-654bc.firebaseio.com/members.json/"
    );
    if (res.ok) {
      return await res.json();
    }
    throw new Error("fetch error");
  }
);

/**
 * POST
 */
export const registMember = createAsyncThunk(
  "modules/registMember",
  async (arg, thunk) => {
    const obj = {
      id: 101,
      name: "test",
      age: 10,
    };
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://test-restapi-654bc.firebaseio.com/members.json/",
      {
        method,
        headers,
        body,
      }
    );
    if (response.ok) {
      return await response.json();
    }
    throw new Error("fetch error");
  }
);

const MemberListModule = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registMember.fulfilled, (state, action) => {
      return {
        ...state,
        member: action.payload,
      };
    });
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      return {
        ...state,
        member: action.payload,
      };
    });
  },
});

// export const {} = FetchModule.actions;

export default MemberListModule;
