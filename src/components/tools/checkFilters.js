import { useDexContext } from "../context/DexContext";
import compareValues from "./alphaSort";

//makes new pokemon list
const useFilterChecker = () => {
  //gets all pokes with {dexNo, dexName, pokeImg, typesHex, pokeAbs, pokeStats, pokeHeight, pokeWidth, pokeGen}
  //returns new list of pokes to map in CardViewer
  //filter order of operations: type/gen, stats, alpha

  const [{ filters, pokemon }, dispatch] = useDexContext();

  let allPokes = [...pokemon]; //array to sort of all fetched pokes
  const passedGenFilter = [];
  const passedTypesFilter = [];

  //if options, update filter arrays
  //reduce
  //if stats, sort
  //if alpha, sort

  // find pokemon that match gen/type filters with true selectors
  if (filters.gen.some(o => o.selected)) {
    console.log("gens changed");
    const genFilter = filters.gen.filter(o => o.selected === true); //get true selectors
    genFilter.forEach((
      obj //foreach selector check if each pokemon matches
    ) =>
      allPokes.forEach(
        poke => poke.pokeGen === obj.gen && passedGenFilter.push(poke)
      )
    );
  }
  if (filters.types.some(o => o.selected)) {
    console.log("types changed");
    const typesFilter = filters.types.filter(o => o.selected === true);
    typesFilter.forEach(obj =>
      allPokes.forEach(
        poke =>
          poke.typesHex.some(hex => hex.type === obj.type) &&
          passedTypesFilter.push(poke)
      )
    );
  }

  //reduce gen and type
  if (passedGenFilter.length || passedTypesFilter.length) {
    const passedPokes = passedTypesFilter.concat(passedGenFilter); // combine arrays of passed pokes
    passedPokes.filter(
      //remove duplicates
      (item, pos) => passedPokes.indexOf(item) === pos
    );
    passedPokes.sort(compareValues("dexNo")); //re-sort by Dex number
    allPokes = [...passedPokes];
    console.log("new array:", allPokes);
  }

  //if stats has a true, sort by stat, stat totals
  if (filters.stats.some(o => o.selected)) {
    console.log("stats changed");
    const statsFilter = filters.stats.filter(o => o.selected);
    console.log(statsFilter);
    //dynamicaly calculate and update key "statTotal" for each poke, then sort by statTotal
    allPokes.forEach(poke => {
      let statArray = [];
      statsFilter.forEach(st =>
        poke.pokeStats.forEach(
          ps => ps.stat === st.stat && statArray.push(ps.value)
        )
      );
      statArray.length
        ? (poke.statTotal = statArray.reduce((a, b) => {
            return a + b;
          }))
        : (poke.statTotal = 0);
    });
    allPokes.sort(compareValues("statTotal", "desc"));
  }

  if (filters.alpha && !filters.stats.some(o => o.selected)) {
    allPokes.sort(compareValues("dexName"));
  }
  return allPokes;
  //FUTURE FUNCTION: make array for types within gen, not combined
};

export default useFilterChecker;
