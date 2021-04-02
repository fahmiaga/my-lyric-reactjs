import React, { useState, useEffect } from "react";
import "../../assets/css/home.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllSongs } from "../../redux/action/lyricAction";
import Pagination from "../Pagination";
import { useHistory } from "react-router-dom";

const Home = () => {
  const alphabetStr = "abcdefghijklmnopqrstuvxyz";
  const alphabets = alphabetStr.toUpperCase().split("");
  const dispatch = useDispatch();
  const lyrics = useSelector((state) => state.lyric.lyrics);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  console.log("lyric =>", lyrics);

  return (
    <>
      <div className="home-container">
        <div className="alphabet">
          {alphabets.map((alphabet, i) => (
            <p key={i}>{alphabet}</p>
          ))}
        </div>
        {lyrics.songs === undefined ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            {lyrics.songs.map((lyric, i) => (
              <div
                key={i}
                className="home-content"
                onClick={() => history.push(`/song/${lyric.id}`)}
              >
                <p>{lyric.penyanyi}</p>
                <p>{lyric.judul}</p>
              </div>
            ))}
          </div>
        )}

        <Pagination page={lyrics.pagecount} />
      </div>
    </>
  );
};
export default Home;
