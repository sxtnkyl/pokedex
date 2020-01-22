import React, { useState, useEffect } from "react";
import { useDexContext } from "../../context/DexContext";
import axios from "axios";
import Card from "./PokemonCard";
import { SmallCard } from "../../tools/PokeInfoGenerator";
// import { useSpring } from "react-spring";
import * as S from "../DexStyles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { css } from "emotion";
// const override = css`
//   display: block;
//   margin: 0 auto;
// `;

const CardViewer = () => {
  //custom hook from DexContext
  const [{ page }, dispatch] = useDexContext();

  const [pokes, setPokes] = useState([]);
  useEffect(() => {
    fetchAllPokes();
  }, [page]);

  //https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
  //axios.all ... fetch each pokmon individually first

  const fetchAllPokes = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species?offset=${page}&limit=20`
      );
      const fetchedPokes = res.data["results"];
      const pokeArr = [];
      fetchedPokes.forEach(p => pokeArr.push(SmallCard(p)));
      // dispatch({ type: "updatePokemon", newPokemon: pokes });
      // dispatch({ type: "updateLoading" });
      setPokes(pokeArr);
    } catch (e) {
      console.log("the error is", e);
    }
  };

  const cards = pokes.map(p => <Card key={p.dexNo} poke={p} />);

  return (
    <S.CardViewer>
      <div id="viewport">{cards}</div>
    </S.CardViewer>
  );
};

export default CardViewer;
