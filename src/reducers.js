import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
  searchField: '',
};

// Reducer
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return initialState;
  }
};
