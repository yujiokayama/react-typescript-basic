import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type Member = {
  id: any;
  name: string;
  age: number;
};

type newMember = {
  name: string | null;
  age: string | null;
};

type editMember = {
  id: string;
  content: newMember;
};

type State = {
  newMember: newMember;
  member: Member[];
};

const initialState: State = {
  newMember: {
    name: null,
    age: null
  },
  member: []
};

export const fetchMembers = createAsyncThunk(
  'modules/fetchMembers',
  async (arg, thunk) => {
    const res = await fetch(
      'https://test-restapi-654bc.firebaseio.com/members.json/'
    );
    if (res.ok) {
      return await res.json();
    }
    throw new Error('fetch error');
  }
);

/**
 * POST
 */
export const registMember = createAsyncThunk(
  'modules/registMember',
  async (args: newMember, thunk) => {
    const obj = args;
    const method = 'POST';
    const body = JSON.stringify(obj);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    const response = await fetch(
      'https://test-restapi-654bc.firebaseio.com/members.json/',
      {
        method,
        headers,
        body
      }
    );
    if (response.ok) {
      return await response.json();
    }
    throw new Error('registration failure');
  }
);

/**
 * PUT
 */
export const editMember = createAsyncThunk(
  'modules/editMember',
  async ({ id, content }: editMember, thunk) => {
    const method = 'PUT';
    const body = JSON.stringify(content);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    const response = await fetch(
      `https://test-restapi-654bc.firebaseio.com/members/${id}.json`,
      {
        method,
        headers,
        body
      }
    );
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Could not update');
  }
);

/**
 * DELETE
 */
export const deleteMember = createAsyncThunk(
  'modules/deleteMember',
  async (id: string, thunk) => {
    const method = 'DELETE';
    const response = await fetch(
      `https://test-restapi-654bc.firebaseio.com/members/${id}.json`,
      {
        method
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('deletion failed');
    }
  }
);

const MemberListModule = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMemberName: (state: State, action: PayloadAction<string>) => {
      state.newMember.name = action.payload;
    },
    setMemberAge: (state, action: PayloadAction<string>) => {
      state.newMember.age = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registMember.fulfilled, (state, action) => {
      return {
        ...state,
        newMember: action.payload
      };
    });
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      return {
        ...state,
        member: action.payload
      };
    });
    builder.addCase(editMember.fulfilled, (state, action) => {
      return {
        ...state,
        editMember: action.payload
      };
    });
    builder.addCase(deleteMember.fulfilled, (state, action) => {
      return {
        ...state,
        deleteMember: action.payload
      };
    });
  }
});

export const { setMemberName, setMemberAge } = MemberListModule.actions;

export default MemberListModule;
