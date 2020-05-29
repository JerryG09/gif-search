import {
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_ERROR
} from '../types';

const fetchGifsSuccess = payload => ({
  type: FETCH_GIFS_SUCCESS,
  payload,
});

const fetchGifsError = payload => ({
  type: FETCH_GIFS_ERROR,
  payload,
});

export const fetchGifs = payload => {
  return async dispatch => {
    try {
      dispatch(fetchGifsSuccess(payload));
    } catch (error) {
      dispatch(fetchGifsError(payload));
    }
  };
};