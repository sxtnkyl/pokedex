import React from "react";
import DexProvider from "./components/context/DexContext";
import DexState from "./components/context/DexState";
import DexReducer from "./components/context/DexReducer";
import Navbar from "./components/navbar/Navbar";
import Dex from "./components/dex/PokemonDex";

import * as S from "./AppStyles";

const App = () => {
  return (
    <S.App>
      <DexProvider initialState={DexState} reducer={DexReducer}>
        <Navbar />
        <Dex />
      </DexProvider>
    </S.App>
  );
};

export default App;
