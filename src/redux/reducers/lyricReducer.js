import {
  GET_LYRICS,
  GET_SONG_BY_ID,
  GET_SONG_BY_ALPHABET,
  SEARCH_DATA,
} from "../actionTypes";

const initialState = {
  lyrics: [],
};

const lyricReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LYRICS:
      return {
        ...state,
        lyrics: payload,
      };
    case GET_SONG_BY_ID:
      return {
        ...state,
        lyrics: payload,
      };
    case GET_SONG_BY_ALPHABET:
      return {
        ...state,
        lyrics: payload,
      };
    case SEARCH_DATA:
      return {
        ...state,
        lyrics: payload,
      };
    default:
      return state;
  }
};

export default lyricReducer;
