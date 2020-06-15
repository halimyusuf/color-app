import {
  FETCH_PALETTES,
  CREATE_PALETTE,
  DELETE_PALETTE,
} from '../actions/types';
import seedColors from '../seedColours';

const INIT_STATE = seedColors;
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PALETTES:
      return state;
    case DELETE_PALETTE:
      let newState = [...state];
      newState = newState.filter((palette) => palette.id === action.payload);
      return newState;
    case CREATE_PALETTE:
      return [...state, action.payload];
    default:
      return state;
  }
};
