import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type Member = {
  id: any;
  name: string;
  age: string;
};

export type NewMember = {
  name?: string;
  age?: string;
};

export type EditTarget = {
  id?: any,
  name?: string;
  age?: string;
};

type State = {
  newMember: NewMember;
  member: Member[];
  editTarget: EditTarget;
};

const initialState: State = {
  newMember: {},
  editTarget: {
    id: "",
    name: "",
    age: "",
  },
  member: [],
};

/**
 * GET
 */
export const fetchMembers = createAsyncThunk(
  "modules/fetchMembers",
  async (_, thunk) => {
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
  async (args: NewMember, thunk) => {
    const obj = args;
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
    throw new Error("registration failure");
  }
);

/**
 * PATCH
 */
export const editMember = createAsyncThunk(
  "modules/editMember",
  async ({ id, name, age }: EditTarget, thunk) => {
    const method = "PATCH";
    const body = JSON.stringify({ id, name, age });
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `https://test-restapi-654bc.firebaseio.com/members/${id}.json`,
      {
        method,
        headers,
        body,
      }
    );
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Could not update");
  }
);

/**
 * DELETE
 */
export const deleteMember = createAsyncThunk(
  "modules/deleteMember",
  async (id: string, thunk) => {
    const method = "DELETE";
    const response = await fetch(
      `https://test-restapi-654bc.firebaseio.com/members/${id}.json`,
      {
        method,
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("deletion failed");
    }
  }
);

const MemberListModule = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMemberName: (state: State, action: PayloadAction<string>) => {
      state.newMember.name = action.payload;
    },
    setEditName: (state: State, action: PayloadAction<string>) => {
      state.editTarget.name = action.payload;
    },
    setMemberAge: (state, action: PayloadAction<string>) => {
      state.newMember.age = action.payload;
    },
    setEditAge: (state, action: PayloadAction<string>) => {
      state.editTarget.age = action.payload;
    },
    getEditTarget: (state: State, action: PayloadAction<object>) => {
      state.editTarget = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registMember.fulfilled, (state, action) => {
      return {
        ...state,
        NewMember: action.payload,
      };
    });
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      return {
        ...state,
        member: action.payload,
      };
    });
    builder.addCase(editMember.fulfilled, (state, action) => {
      return {
        ...state,
        editTarget: action.payload,
      };
    });
  },
});

export const {
  setMemberName,
  setMemberAge,
  getEditTarget,
  setEditName,
  setEditAge,
} = MemberListModule.actions;

export default MemberListModule;
