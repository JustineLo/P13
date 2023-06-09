import { createSlice, configureStore } from '@reduxjs/toolkit';

export type AppState = {
  auth: {
    token: string;
    profile: {
      firstName: string;
      lastName: string;
    };
  };
}

const initialState = {
  token: null,
  profile: {
    firstName: '',
    lastName: '',
  },
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
      state.profile = {
        firstName: '',
        lastName: '',
      }
    },
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { signIn, signOut, updateProfile } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
