import React, { useState, useEffect } from "react";
import { useDexContext } from "../../context/DexContext";
import { useSpring } from "react-spring";
import * as S from "../DexStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// https://stackoverflow.com/questions/51726391/how-to-create-a-search-field-in-reactjs
//https://www.robinwieruch.de/react-hooks-fetch-data
const SearchBar = () => {
  const [{ view }, dispatch] = useDexContext();

  const expandSpring = useSpring({
    flexBasis: view.searchbar ? "30%" : "5%"
  });

  return (
    <S.SearchBar style={expandSpring}>
      <div id="expand">
        {view.searchbar ? (
          <FontAwesomeIcon icon={["fas", "window-minimize"]} size="lg" />
        ) : (
          <FontAwesomeIcon
            icon={["far", "window-maximize"]}
            size="lg"
            onClick={() => dispatch({ type: "searchView" })}
          />
        )}
        <span> Search Options</span>
      </div>
    </S.SearchBar>
  );
};

export default SearchBar;
