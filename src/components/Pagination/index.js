import React, { useState } from "react";
import "../../assets/css/pagination.css";
import { useDispatch } from "react-redux";
import { getAllSongs } from "../../redux/action/lyricAction";

const Pagination = (props) => {
  const pages = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(10);
  const [MaxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [MinPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const dispatch = useDispatch();

  for (let i = 1; i <= props.page; i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
    dispatch(getAllSongs(page));
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > MaxPageNumberLimit) {
      setMaxPageNumberLimit(MaxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(MinPageNumberLimit + pageNumberLimit);
    }
    dispatch(getAllSongs(currentPage));
  };
  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(MaxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(MinPageNumberLimit - pageNumberLimit);
    }
    dispatch(getAllSongs(currentPage));
  };

  let pageNext = null;
  if (pages.length > MaxPageNumberLimit) {
    pageNext = <li onClick={handleClickNext}>&hellip;</li>;
  }
  let pagePrev = null;
  if (MinPageNumberLimit >= 1) {
    pagePrev = <li onClick={handleClickPrev}>&hellip;</li>;
  }

  console.log(currentPage);

  const renderPageNumber = pages.map((page, i) => {
    if (page < MaxPageNumberLimit + 1 && page > MinPageNumberLimit) {
      return (
        <li
          key={i}
          onClick={() => handleClick(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      <div className="pagination">
        <ul>
          {currentPage === pages[0] ? (
            ""
          ) : (
            <li onClick={() => handleClickPrev()}>
              <i className="fas fa-angle-double-left"></i>
            </li>
          )}

          {pagePrev}
          {renderPageNumber}
          {pageNext}

          {currentPage === pages[pages.length]}

          <li onClick={() => handleClickNext()}>
            <i className="fas fa-angle-double-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Pagination;
