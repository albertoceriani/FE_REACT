// import { useState } from "react";
import "./App.css";
import Box from "./components/Box/Box";
import Utente from "./components/Utente/Utente";

function App() {
  return (
    <>
      <Utente/> 
      <Box colore="blue">
        <h2>Titolo box1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam fuga accusantium sunt saepe debitis pariatur ex vitae distinctio eius illo amet animi fugiat placeat?</p>
      </Box>     
      <Box colore="pink">
        <h2>Titolo box esterno</h2>
        <Box colore="green">
        <h2>Titolo box1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam fuga accusantium sunt saepe debitis pariatur ex vitae distinctio eius illo amet animi fugiat placeat?</p>
        </Box>
      </Box>     
    </>
  );
}

export default App;