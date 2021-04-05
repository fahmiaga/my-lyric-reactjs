import axios from "axios";
import {
  GET_LYRICS,
  GET_SONG_BY_ID,
  GET_SONG_BY_ALPHABET,
} from "../actionTypes";

export const getAllSongs = (page = 1) => (dispatch) => {
  axios
    .get(`https://my-lyrics.000webhostapp.com/song/getallsongs/${page}`)
    .then((res) => {
      dispatch({
        type: GET_LYRICS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getSongById = (id) => (dispatch) => {
  axios
    .get(`https://my-lyrics.000webhostapp.com/song/getsongbyid/${id}`)
    .then((res) => {
      dispatch({
        type: GET_SONG_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getSongByAlphabet = (alphabet) => (dispatch) => {
  axios
    .get(
      `https://my-lyrics.000webhostapp.com/song/getsongbyalphabet/${alphabet}`
    )
    .then((res) => {
      console.log("res =>", res);
      dispatch({
        type: GET_SONG_BY_ALPHABET,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
