import { combineReducers } from "redux";
import lyricReducer from "./reducers/lyricReducer";

export default combineReducers({
  lyric: lyricReducer,
});
