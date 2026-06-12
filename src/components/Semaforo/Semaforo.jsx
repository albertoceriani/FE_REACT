import { useState } from "react";
import Box from "../Box/Box";
import styles from "./Semaforo.module.css";

export default function Semaforo() {
    const colori = [
        {colore:"verde", color:"green"},
        {colore:"giallo", color:"yellow"},
        {colore:"rosso", color:"red"}
    ];
  const [indice, setIndice] = useState(0);
  return (
    <Box>
        <p>Il semaforo è {colori[indice].colore}</p>
        <div className={styles.semaforo} style={{'--colore-semaforo': colori[indice].color}} ></div>
        <button className={styles.btn} onClick={() => indice == colori.length - 1 ? setIndice(0) : setIndice(indice + 1)}>Cambia semaforo</button>
    </Box>
  ) 
}
