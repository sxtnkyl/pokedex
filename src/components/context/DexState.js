//view: true=expanded, false=minimized
//filters: string params to match in pokemon
//pokemon: list fetched from api
import filterStateObject from "../tools/filterStateObject";

const DexState = {
  cardview: true,
  page: 0,
  filters: filterStateObject,
  pokemon: [],
  loading: true
};

//changing one of the dexstate keys updates every component using the globalcontext

export default DexState;
