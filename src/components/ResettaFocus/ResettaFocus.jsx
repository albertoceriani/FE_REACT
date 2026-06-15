import {useState, useEffect, useRef} from 'react';
import styles from './ResettaFocus.module.css';
import Box from '../Box/Box';

export default function ResettaFocus() {
    const inputRef = useRef(null);
    return (
        <Box>
            <form action="">
            <div>
                <label>Nome</label>
                <input type="text" ref={inputRef} autoFocus />
            </div>
            <div>
                <label>Cognome</label>
                <input type="text" />
            </div>
            <div>
                <label>Telefono</label>
                <input type="text" />
            </div>
            <button type='reset' onClick={()=> inputRef.current.focus()}>Pulisci</button>
            </form>
        </Box>
    );
}