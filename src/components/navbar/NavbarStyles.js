import styled from "styled-components";

//https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties/33856609#33856609
//flexbox justify-self scenario

const Navbar = styled.nav`
  width: 100%;
  min-height: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  div {
    max-width: 22%;
    flex: 22%;
    border: 1px solid black;
  }
  #logo {
    margin-right: auto;
  }
  @media (max-width: 800px) {
    justify-content: center;
    div {
      flex: 44%;
      max-width: 44%;
      text-align: center;
    }
    #logo {
      margin-right: 0;
    }
  }
  @media (max-width: 600px) {
    div {
      flex: 98%;
      max-width: 98%;
    }
  }
`;

export { Navbar };
