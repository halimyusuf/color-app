import {
  FETCH_PALETTE,
  FETCH_PALETTES,
  CREATE_PALETTE,
  DELETE_PALETTE,
} from './types';

export const fetchPalletes = () => {
  return {
    type: FETCH_PALETTES,
  };
};

export const fetchPallete = (palette) => {
  return {
    type: FETCH_PALETTE,
    payload: palette,
  };
};

export const createPalette = (palette) => {
  return {
    type: CREATE_PALETTE,
    payload: palette,
  };
};

export const deletePalette = (palette) => {
  return {
    type: DELETE_PALETTE,
    payload: palette,
  };
};
