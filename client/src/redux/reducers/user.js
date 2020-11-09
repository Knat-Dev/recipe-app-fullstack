import { LOGIN } from '../types';

const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default userReducer;
