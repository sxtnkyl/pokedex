import React, { useState, useEffect } from "react";
import { useDexContext } from "../../context/DexContext";
import compareValues from "../../tools/alphaSort";
import { useSpring } from "react-spring";
import * as S from "../DexStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterOptions = props => {
  ////filterOptions renders before cardViewer, passes options to context, cardviewer uses context in map
  //filter tree(on/off): combine all options; when initial filter state changes
  //type: intitial all types selected, if alltypes selected filter to clicked, click adds/removes to list, add/remove all button
  //stats: sort by stat, highest to lowest, combined base stat
  //gen: sort by dex, future sort feature-gen specific stats
  //alphabetically
  const [{ view, filters }, dispatch] = useDexContext();

  //onclick update allFilterOptions, dispatch "updateFilters"
  const allFilterOptions = {
    //initial filter state
    types: [
      { type: "normal", hex: "#A8A77A", selected: false },
      { type: "fire", hex: "#EE8130", selected: false },
      { type: "water", hex: "#6390F0", selected: false },
      {
        type: "electric",
        hex: "#F7D02C",
        selected: false
      },
      { type: "grass", hex: "#7AC74C", selected: false },
      { type: "ice", hex: "#96D9D6", selected: false },
      { type: "fighting", hex: "#C22E28", selected: false },
      { type: "poison", hex: "#A33EA1", selected: false },
      { type: "ground", hex: "#E2BF65", selected: false },
      { type: "flying", hex: "#A98FF3", selected: false },
      { type: "psychic", hex: "#F95587", selected: false },
      { type: "bug", hex: "#A6B91A", selected: false },
      { type: "rock", hex: "#B6A136", selected: false },
      { type: "ghost", hex: "#735797", selected: false },
      { type: "dragon", hex: "#6F35FC", selected: false },
      { type: "dark", hex: "#705746", selected: false },
      { type: "steel", hex: "#B7B7CE", selected: false },
      { type: "fairy", hex: "#D685AD", selected: false }
    ],
    stats: [
      { stat: "hp", selected: false },
      { stat: "attack", selected: false },
      { stat: "defense", selected: false },
      { stat: "special-attack", selected: false },
      { stat: "special-defense", selected: false },
      { stat: "speed", selected: false }
    ],
    gen: [
      { gen: "generation-i", selected: false },
      { gen: "generation-ii", selected: false },
      { gen: "generation-iii", selected: false },
      { gen: "generation-iv", selected: false },
      { gen: "generation-v", selected: false },
      { gen: "generation-vi", selected: false },
      { gen: "generation-vii", selected: false }
    ],
    alpha: false
  };

  //editedfilter states
  const [typeState, setTypeState] = useState(allFilterOptions.types);
  useEffect(() => {}, [typeState]);
  function toggleTypesFilter(e) {
    //e = {type, hex, selected}
    const f = typeState.map(o =>
      o.type === e.type ? { ...o, selected: e.selected ? false : true } : o
    );
    setTypeState(f);
    dispatch({ type: "updateTypes", newTypes: (filters.types = f) });
  }

  const [statState, setStatState] = useState(allFilterOptions.stats);
  useEffect(() => {}, [statState]);
  function toggleStatsFilter(e) {
    //e = {stat, selected}
    const f = statState.map(o =>
      o.stat === e.stat ? { ...o, selected: e.selected ? false : true } : o
    );
    setStatState(f);
    dispatch({ type: "updateStats", newStats: (filters.stats = f) });
  }

  const [genState, setGenState] = useState(allFilterOptions.gen);
  useEffect(() => {}, [genState]);
  function toggleGenFilter(e) {
    //e = {gen, selected}
    const f = genState.map(o =>
      o.gen === e.gen ? { ...o, selected: e.selected ? false : true } : o
    );
    setGenState(f);
    dispatch({ type: "updateGen", newGen: (filters.gen = f) });
  }
  const [alphaState, setAlphaState] = useState(allFilterOptions.alpha);
  useEffect(() => {}, [alphaState]);
  function toggleAlphaState() {
    const f = !alphaState;
    setAlphaState(f);
    dispatch({
      type: "updateAlpha",
      newAlpha: (filters.alpha = f)
    });
  }

  function toggleAllFilters() {
    //toggle filters off- to false
    setTypeState(allFilterOptions.types);
    dispatch({
      type: "updateTypes",
      newTypes: (filters.types = allFilterOptions.types)
    });
    setStatState(allFilterOptions.stats);
    dispatch({
      type: "updateStats",
      newStats: (filters.stats = allFilterOptions.stats)
    });
    setGenState(allFilterOptions.gen);
    dispatch({
      type: "updateGen",
      newGen: (filters.gen = allFilterOptions.gen)
    });
    setAlphaState(allFilterOptions.alpha);
    dispatch({
      type: "updateAlpha",
      newAlpha: (filters.alpha = allFilterOptions.alpha)
    });
  }

  const typeButtons = typeState.sort(compareValues("type")).map(o => (
    <S.FilterButton
      key={o.type}
      select={o.selected.toString()}
      onClick={() => toggleTypesFilter(o)}
    >
      {o.type}
    </S.FilterButton>
  ));
  const statButtons = statState.map(o => (
    <S.FilterButton
      key={o.stat}
      select={o.selected.toString()}
      onClick={() => toggleStatsFilter(o)}
    >
      {o.stat}
    </S.FilterButton>
  ));
  const genButtons = genState.map(o => (
    <S.FilterButton
      key={o.gen}
      select={o.selected.toString()}
      onClick={() => toggleGenFilter(o)}
    >
      {o.gen}
    </S.FilterButton>
  ));
  const alphaButton = (
    <S.FilterButton
      select={alphaState.toString()}
      onClick={() => toggleAlphaState()}
    >
      {alphaState ? "A-Z" : "Off"}
    </S.FilterButton>
  );
  const resetButton = (
    <S.FilterButton onClick={() => toggleAllFilters()}>
      Reset All Filters
    </S.FilterButton>
  );

  const filterButtons = (
    <div id="filterButtons">
      <div className="options" id="type">
        {typeButtons}
      </div>
      <div className="options" id="stat">
        {statButtons}
      </div>
      <div className="options" id="gen">
        {genButtons}
      </div>
      <div className="options" id="gen">
        {alphaButton}
      </div>
      <div className="options" id="reset">
        {resetButton}
      </div>
    </div>
  );

  const expandSpring = useSpring({
    flexBasis: view.filteroptions ? "50%" : "5%"
  });

  return (
    <S.FilterOptions style={expandSpring}>
      <div id="expand">
        {view.filteroptions ? (
          <FontAwesomeIcon icon={["fas", "window-minimize"]} size="lg" />
        ) : (
          <FontAwesomeIcon
            icon={["far", "window-maximize"]}
            size="lg"
            onClick={() => dispatch({ type: "filterView" })}
          />
        )}
        <span> Filter Options</span>
        {filterButtons}
      </div>
    </S.FilterOptions>
  );
};

export default FilterOptions;
