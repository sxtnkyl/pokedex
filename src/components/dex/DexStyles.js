import styled from "styled-components";
import { animated } from "react-spring";

const Dex = styled.div`
  background: #cc0000;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  #viewToggle {
    display: inline-block;
  }
`;

const SearchBar = styled(animated.div)`
  flex: 0 0 auto;
  margin-top: 1%;
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  width: 80%;
  #expand {
    padding: 5px;
  }
`;

const FilterOptions = styled(animated.div)`
  flex: 0 0 auto;
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  width: 80%;
  overflow: hidden;
  #expand {
    padding: 5px;
    height: 100%;
    width: 100%;
    #filterButtons {
      padding: 5px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .options {
        border: 1px solid black;
        width: 80%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
`;

const FilterButton = styled(animated.div)`
  background: ${props => (props.select === "true" ? "red" : "blue")};
  border: 1px solid black;
  border-radius: 2px;
  width: auto;
  height: 20px;
  margin: 10px 10px;
  cursor: pointer;
`;

const CardViewer = styled(animated.div)`
  background: #cc0000;
  border-radius: 2px;
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  #viewport {
    width: 100%;
    height: 100%
    display: grid;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    grid-gap: 3%;
    padding-right: 15px;
    overflow: auto;
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
      margin: 5px 5px;
    }
    ::-webkit-scrollbar {
      cursor: pointer;
      width: 15px;
      background-color: #3b4cca;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 6px #3b4cca;
      background-color: #cc0000;
    }
  }
`;

const Card = styled.div`
  height: auto;
  background: white;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  text-align: center;
  #card-top {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    #card-no {
      margin-right: auto;
      padding: 10px;
      font-weight: 700;
      font-size: 1.2em;
    }
    #card-add {
      cursor: pointer;
      padding: 10px;
    }
    #card-expand {
      padding: 10px;
    }
  }
  #card-sprite {
    flex: 1 1 1;
    #loader {
      position: relative;
      top: 50%;
      left: 50%;
    }
  }
  #card-name {
    flex: 1 1 1;
    font-weight: 700;
    font-size: 1.2em;
    padding-top: 7px;
    padding-bottom: 7px;
  }
`;

const NavCarousel = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  #pageNumber {
    margin: 5px;
    align-self: center;
    cursor: pointer;
    font-weight: 700;
  }
`;

// #typebar {
//   display: ${props => props.typesHex.length > 1 && "grid"};
//   grid-template-columns: 1fr 1fr;
//   margin: auto 0;
//   padding-top: 5px;
//   padding-bottom: 5px;
//   flex: 1 1 1;
//   background: ${props =>
//     props.typesHex.length === 1
//       ? props.typesHex[0].hex
//       : "linear-gradient(134deg," +
//         " " +
//         props.typesHex[0].hex +
//         " " +
//         "50%," +
//         " " +
//         props.typesHex[1].hex +
//         " " +
//         "50%)"};
// }

export {
  Dex,
  SearchBar,
  FilterOptions,
  FilterButton,
  CardViewer,
  Card,
  NavCarousel
};
