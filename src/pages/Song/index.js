import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSongById } from "../../redux/action/lyricAction";
import "../../assets/css/song.css";

const Song = () => {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.lyric.lyrics);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSongById(id));
  }, [dispatch, id]);

  console.log("song =>", song);

  return (
    <>
      <div className="song-container">
        <div className="lyric">
          <p>{song.lirik}</p>
        </div>
        <div className="details">
          <h2>Title : {song.judul}</h2>
          <h2>Artist : {song.penyanyi}</h2>
        </div>
      </div>
    </>
  );
};
export default Song;
