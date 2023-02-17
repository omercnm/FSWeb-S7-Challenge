import React from "react";
import styled from "styled-components";
import Anasayfa from "./Anasayfa";

const Sc_h1 = styled.h1`
  color: black;
  font-size: 3rem;
  padding: 0 30%;
`;
const Sc_header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #f94a29;

  img {
    width: 5%;
    height: 5%;
    margin: auto 25px;
  }
`;
const Sc_p = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  color: #f94a29;
`;

const App = () => {
  return (
    <>
      <div>
        <Sc_header>
          <img src="./pizzalogo.png" />
          <Sc_h1>Teknolojik Yemekler</Sc_h1>
        </Sc_header>
        <div>
          <Sc_p>Dilediğiniz Pizza 45dk İçerisinde Kapınızda</Sc_p>
        </div>
        <main>
          <Anasayfa />
        </main>
      </div>
    </>
  );
};
export default App;
