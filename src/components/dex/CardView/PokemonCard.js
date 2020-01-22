import React from "react";
import { useDexContext } from "../../context/DexContext";
import * as S from "../DexStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import DotLoader from "react-spinners/DotLoader";

//card is initially loaded with SmallCard function, loads LargeCard onclick
const Card = props => {
  const [{ pokemon, loading }, dispatch] = useDexContext();

  const { dexNo, dexName, pokeImg } = props.poke;

  return (
    <S.Card>
      <div id="card-top">
        <div id="card-no">{dexNo}</div>
        <div id="card-add">
          <FontAwesomeIcon icon={["far", "plus-square"]} size="lg" />
        </div>
        <div id="card-expand">
          <FontAwesomeIcon icon={["fas", "expand"]} size="lg" />
        </div>
      </div>
      <div id="card-sprite">
        <img src={pokeImg} alt="pokemon sprite" />
      </div>
      {/* <div id="typebar">
        <>
          <span>{typesHex.length == 1 && typesHex[0].type}</span>{" "}
          <span>{typesHex.length == 2 && typesHex[1].type}</span>
        </>
      </div> */}
      <div id="card-name">{dexName}</div>
    </S.Card>
  );
};

export default Card;
