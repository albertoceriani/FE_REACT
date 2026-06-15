import styles from "./ChangeTitle.module.css";
import {useState, useEffect, useRef} from 'react';

export default function ChangeTitle() {
    //document.title per accedere in lettura e scrittura al title della Head dell'index.html
    //document.title non può essere gestito da jsx se non tramite l'hook useEffect
    const [title, setTitle] = useState(document.title);
    useEffect(()=> {
        document.title = title;
    }, [title])

    return <div className={styles.container}>
        <input type="text" onBlur={(e) => setTitle(e.target.value)}  />
    </div>
}