import React, { useState, useEffect } from "react";
import { useDexContext } from "../../context/DexContext";
import * as S from "../DexStyles";

//Utilized in Dex Card Vew
//creates a carousel nav slider which loads a corresponding set of 20 pokes
//holds sequential set such as 0-20, 21-40, 101-120
//loads set on page click

//data needed: total number of pokes

const NavCarousel = () => {
  //make array of pages, holding the value of first pokeNumber in page
  //first page is 0 (shows pokes 1-20)
  //max page is 800, as last poke is #807
  //ouput: [0, 20, 40....]
  const maxPoke = 807;
  let start = 0;
  const pageArr = [];
  while (start < maxPoke) {
    pageArr.push(start);
    start += 20;
  }

  //carousel needs to display 7 pages
  //display value is (pageval to pageval+19)
  //needs to track selected page
  //selectedPage is number for url fetch- set in global context
  const [{ page }, dispatch] = useDexContext();
  const [selectedPage, setSelectedPage] = useState({
    pageNum: page,
    currentIndex: page
  });
  useEffect(() => {
    dispatch({ type: "updatePage", newPage: selectedPage.pageNum });
  }, [selectedPage]);

  let lastPage = pageArr[pageArr.length - 1];
  let lastIndex = pageArr.indexOf(lastPage);
  let firstPage = pageArr[0];

  const handlePageClick = e => {
    let newNum = parseInt(e.target.getAttribute("pageval"));
    let newIndex = pageArr.indexOf(newNum);
    setSelectedPage({ pageNum: newNum, currentIndex: newIndex });
  };
  const handleBack = () => {
    let backOne = pageArr[pageArr.indexOf(page) - 1];
    let backIndex = pageArr.indexOf(backOne);
    if (page === firstPage) {
      setSelectedPage({ pageNum: lastPage, currentIndex: lastIndex });
    } else setSelectedPage({ pageNum: backOne, currentIndex: backIndex });
  };
  const handleForward = () => {
    let forwardOne = pageArr[pageArr.indexOf(page) + 1];
    let forwardIndex = pageArr.indexOf(forwardOne);
    if (page === lastPage) {
      setSelectedPage({ pageNum: firstPage, currentIndex: 0 });
    } else setSelectedPage({ pageNum: forwardOne, currentIndex: forwardIndex });
  };

  return (
    <S.NavCarousel>
      <button onClick={handleBack}>previous</button>
      {pageArr.map(o => (
        <div id="pageNumber" key={o} pageval={o} onClick={handlePageClick}>
          {pageArr.indexOf(o)}
        </div>
      ))}
      <button onClick={handleForward}>next</button>
    </S.NavCarousel>
  );
};

export default NavCarousel;
