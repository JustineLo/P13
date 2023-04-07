import { createStore } from 'redux';

const initialState = {
    token: null,
    profile: null,
};

function rootReducer(state = initialState, action: any): any {
  switch (action.type) {
    case 'SIGNIN':
        return { ...state, token: action.payload };
    case 'SIGNOUT':
        return {
            ...state, token: null, profile: null };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
