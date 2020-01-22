import React, { useContext, useReducer } from "react";

//medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
//https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5
//https://www.taniarascia.com/using-context-api-in-react/
//https://reactjs.org/docs/context.html

//create the context
const DexContext = React.createContext();

//make provider to wrap components
//provides the value obj
const DexProvider = ({ reducer, initialState, children }) => (
  <DexContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DexContext.Provider>
);

//custum hook- returns [state, dispatch]
export const useDexContext = () => useContext(DexContext);

export default DexProvider;

/////////////////////////////////////////////////////////////

// const DexContext = React.createContext(DexState);

// function ProviderComposer({ contexts, children }) {
//   return contexts.reduceRight(
//     (kids, parent) =>
//       React.cloneElement(parent, {
//         children: kids
//       }),
//     children
//   );
// }

// export const GlobalContextProvider = props => {
//   const { children, reducer } = props;

//   const contexts = [<DexContext />];

//   return <ProviderComposer contexts={contexts} reducer={}>{children}</ProviderComposer>;
// };
