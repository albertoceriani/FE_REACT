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
      <Biglietto/>
      <MeteoInfo/>
      <Card/>
      <Card2/>
    </>
  );
}

export default App;