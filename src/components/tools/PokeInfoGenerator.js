import typeColorConverter from "./typeColorConverter";
import axios from "axios";

const SmallCard = poke => {
  const { name, url } = poke;

  const smallObj = {
    dexNo: null,
    dexName: "",
    pokeImg: ""
  };

  const dexno = parseInt(url.split("/")[url.split("/").length - 2]);
  const dexname = name
    .toLowerCase()
    .split(" ")
    .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
    .join(" ");

  const pokeimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexno}.png`;

  smallObj["dexNo"] = dexno;
  smallObj["dexName"] = dexname;
  smallObj["pokeImg"] = pokeimg;

  return smallObj;
};

const LargeCard = poke => {
  //gets a pokes [{name, url}], fetches all needed data, returns pokeObj
  //data needed: dexNo, dexName, pokeImg, types, typeshex, abilities, stats, height, weight, gen
  const allData = {
    dexNo: null,
    dexName: "",
    pokeImg: "",
    typesHex: null,
    pokeAbs: null,
    pokeStats: null,
    pokeHeight: "",
    pokeWeight: "",
    pokeGen: "",
    statTotal: 0
  };

  const { name, url } = poke;
  ////make custom variables to reduce fetching////
  const dexno = parseInt(url.split("/")[url.split("/").length - 2]);

  const dexname = name
    .toLowerCase()
    .split(" ")
    .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
    .join(" ");

  const pokeimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexno}.png`;

  allData["dexNo"] = dexno;
  allData["dexName"] = dexname;
  allData["pokeImg"] = pokeimg;

  const fetchPokemon = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexno}/`);
    const fetchedPokes = res.data;

    const hexArr = [];
    fetchedPokes.types.forEach(type => hexArr.push(type.type.name));
    const hexes = typeColorConverter(hexArr);

    const absArr = [];
    fetchedPokes.abilities.forEach(a => absArr.push(a.ability.name));

    const statsArr = [];
    fetchedPokes.stats.forEach(s =>
      statsArr.push({ stat: s.stat.name, value: s.base_stat })
    );

    const ht = fetchedPokes.height;

    const wt = fetchedPokes.weight;

    allData["typesHex"] = hexes;
    allData["pokeAbs"] = absArr;
    allData["pokeStats"] = statsArr;
    allData["pokeHeight"] = ht;
    allData["pokeWeight"] = wt;
  };

  fetchPokemon();

  const fetchSpecies = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${dexno}/`
    );
    const fetchedSpecies = res.data;
    const gen = fetchedSpecies.generation.name;
    allData["pokeGen"] = gen;
  };
  fetchSpecies();

  return allData;
};

export { SmallCard, LargeCard };
