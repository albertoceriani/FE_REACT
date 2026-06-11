// import { useState } from "react";
import "./App.css";
import Biglietto from "./components/Biglietto";
import Card from "./components/Card/Card";
import Card2 from "./components/Card2/Card2";
import MeteoInfo from "./components/MeteoInfo";

function App() {
  return (
    <>
      <h1>PRIMO REACT</h1>
      <Biglietto nome="Giacomo" destinazione="Roma"/>
      <Biglietto nome="Emma" destinazione="Bari"/>
      <Biglietto nome="Marta" destinazione="Como"/>
      <Biglietto destinazione="Marrachesh"/>
      <MeteoInfo/>
      <Card/>
      <Card2/>
    </>
  );
}

export default App;