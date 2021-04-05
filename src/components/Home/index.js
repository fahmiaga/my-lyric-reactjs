import React, { useState, useEffect } from "react";
import "../../assets/css/home.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllSongs, getSongByAlphabet } from "../../redux/action/lyricAction";
import Pagination from "../Pagination";
import { useHistory } from "react-router-dom";

const Home = () => {
  const alphabetStr = "abcdefghijklmnopqrstuvxyz";
  const alphabets = alphabetStr.toUpperCase().split("");
  const [currentAlphabet, setCurrentAlphabet] = useState("");
  const dispatch = useDispatch();
  const lyrics = useSelector((state) => state.lyric.lyrics);
  const songAlphabet = useSelector((state) => state.lyric.lyrics);
  const history = useHistory();

  const handleCLickAlphabet = (alphabet) => {
    dispatch(getSongByAlphabet(alphabet));
    setCurrentAlphabet(alphabet);
  };

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  console.log("lyric =>", songAlphabet);

  return (
    <>
      <div className="home-container">
        <div className="alphabet ">
          {alphabets.map((alphabet, i) => (
            <p
              key={i}
              onClick={() => handleCLickAlphabet(alphabet)}
              className={currentAlphabet === alphabet ? "alphabet-active" : ""}
            >
              {alphabet}
            </p>
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
                <p>{lyric.judul}</p>
                <p>{lyric.penyanyi}</p>
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
