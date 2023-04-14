import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
    },
    signOut: (state) => {
      state.token = null;
      state.profile = null;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { signIn, signOut, setProfile } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
