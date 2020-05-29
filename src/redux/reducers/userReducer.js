import {
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_ERROR
} from '../types';

const initialState = {
  allRelatedGifs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIFS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case FETCH_GIFS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};