import axios from "axios";
import { GET_LYRICS, GET_SONG_BY_ID } from "../actionTypes";

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
      console.log("res =>", res);
      dispatch({
        type: GET_SONG_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
