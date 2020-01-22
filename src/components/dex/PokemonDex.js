import React, { useState, useEffect } from "react";
import { useDexContext } from "../context/DexContext";
import CardViewer from "./CardView/PokemonCardViewer";
import ListViewer from "./ListView/PokemonListViewer";
import NavCarousel from "./CardView/navCarousel";
import * as S from "./DexStyles";
import Switch from "react-switch";

/////Views
//CardView: loads 20 cards at a time, click individual card to expand (initial load view)
//ListView: loads all info for and individual poke

const Dex = () => {
  const [{ cardview }, dispatch] = useDexContext();

  function handleToggle() {
    dispatch({ type: "cardView" });
  }

  return (
    <S.Dex>
      <div id="viewToggle">
        <Switch
          checked={!cardview}
          onChange={handleToggle}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={22}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={30}
          width={60}
        />
        {cardview ? "Card View" : "List View"}
      </div>
      {cardview ? <CardViewer /> : <ListViewer />}
      {cardview && <NavCarousel />}
    </S.Dex>
  );
};

export default Dex;
