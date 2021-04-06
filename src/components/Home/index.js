import React, { useState, useEffect } from "react";
import "../../assets/css/home.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllSongs,
  getSongByAlphabet,
  search,
} from "../../redux/action/lyricAction";
import Pagination from "../Pagination";
import { useHistory } from "react-router-dom";

const Home = () => {
  const alphabetStr = "abcdefghijklmnopqrstuvxyz";
  const alphabets = alphabetStr.toUpperCase().split("");
  const [currentAlphabet, setCurrentAlphabet] = useState("");
  const dispatch = useDispatch();
  const lyrics = useSelector((state) => state.lyric.lyrics);
  const songAlphabet = useSelector((state) => state.lyric.lyrics);
  const searchLyric = useSelector((state) => state.lyric.lyrics);
  const history = useHistory();
  const [input, setInput] = useState({
    keyword: "",
  });

  const handleCLickAlphabet = (alphabet) => {
    dispatch(getSongByAlphabet(alphabet));
    setCurrentAlphabet(alphabet);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    dispatch(search(input.keyword));
  };

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  console.log("lyric =>", songAlphabet);
  console.log("input =>", searchLyric);

  return (
    <>
      <div className="home-container">
        <input
          type="text"
          placeholder="Your keyword..."
          name="keyword"
          onChange={(e) => handleChange(e)}
        />
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

        {input.keyword === "" ? (
          <div>
            {lyrics.songs === undefined ? (
              <h3>Loading...</h3>
            ) : (
              <div>
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
              </div>
            )}
          </div>
        ) : (
          <div>
            {searchLyric.result === undefined ? (
              <h3>Loading...</h3>
            ) : (
              <div>
                <div>
                  {searchLyric.result.map((lyric, i) => (
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
              </div>
            )}
          </div>
        )}

        <Pagination page={lyrics.pagecount} />
      </div>
    </>
  );
};
export default Home;
