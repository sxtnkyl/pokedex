const typeChart = [
  {
    type: "normal",
    immunes: ["ghost"],
    weaknesses: ["rock", "steel"],
    strengths: []
  },
  {
    type: "fire",
    immunes: [],
    weaknesses: ["fire", "water", "rock", "dragon"],
    strengths: ["grass", "ice", "bug", "steel"]
  },
  {
    type: "water",
    immunes: [],
    weaknesses: ["water", "grass", "dragon"],
    strengths: ["fire", "ground", "rock"]
  },
  {
    type: "electric",
    immunes: ["ground"],
    weaknesses: ["electric", "grass", "dragon"],
    strengths: ["water", "flying"]
  },
  {
    type: "grass",
    immunes: [],
    weaknesses: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
    strengths: ["water", "ground", "rock"]
  },
  {
    type: "ice",
    immunes: [],
    weaknesses: ["fire", "water", "ice", "steel"],
    strengths: ["grass", "ground", "flying", "dragon"]
  },
  {
    type: "fighting",
    immunes: ["ghost"],
    weaknesses: ["poison", "flying", "psychic", "bug", "fairy"],
    strengths: ["normal", "ice", "rock", "dark", "steel"]
  },
  {
    type: "poison",
    immunes: ["steel"],
    weaknesses: ["poison", "ground", "rock", "ghost"],
    strengths: ["grass", "fairy"]
  },
  {
    type: "ground",
    immunes: ["flying"],
    weaknesses: ["grass", "bug"],
    strengths: ["fire", "electric", "poison", "rock", "steel"]
  },
  {
    type: "flying",
    immunes: [],
    weaknesses: ["electric", "rock", "steel"],
    strengths: ["grass", "fighting", "bug"]
  },
  {
    type: "psychic",
    immunes: ["dark"],
    weaknesses: ["psychic", "steel"],
    strengths: ["fighting", "poison"]
  },
  {
    type: "bug",
    immunes: [],
    weaknesses: [
      "fire",
      "fighting",
      "poison",
      "flying",
      "ghost",
      "steel",
      "fairy"
    ],
    strengths: ["grass", "psychic", "dark"]
  },
  {
    type: "rock",
    immunes: [],
    weaknesses: ["fighting", "ground", "steel"],
    strengths: ["fire", "ice", "flying", "bug"]
  },
  {
    type: "ghost",
    immunes: ["normal"],
    weaknesses: ["dark"],
    strengths: ["psychic", "ghost"]
  },
  {
    type: "dragon",
    immunes: ["fairy"],
    weaknesses: ["steel"],
    strengths: ["dragon"]
  },
  {
    type: "dark",
    immunes: [],
    weaknesses: ["fighting", "dark", "fairy"],
    strengths: ["psychic", "ghost"]
  },
  {
    type: "steel",
    immunes: [],
    weaknesses: ["fire", "water", "electric", "steel"],
    strengths: ["ice", "rock", "fairy"]
  },
  {
    type: "fairy",
    immunes: [],
    weaknesses: ["fire", "poison", "steel"],
    strengths: ["fighting", "dragon", "dark"]
  }
];
