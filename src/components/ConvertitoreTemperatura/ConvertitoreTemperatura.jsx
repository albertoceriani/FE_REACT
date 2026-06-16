import {useState, useEffect, useRef} from 'react';
import Box from "../Box/Box";
import InputTemperatura from './InputTemperatura';

export default function ConvertitoreTemperatura() {
    const [tempC, setTempC] = useState(0);
    const fromFarToCel = f => ((f-32)*5)/9;
    const fromCelToFar = c => ((c*9)/5)+32;
    return(
        <Box>
            <h2>Convertitore di temperatura</h2>
            <InputTemperatura etichetta="Celsius (C°)" valore={tempC} onChange={val => setTempC(+val)} />
            <InputTemperatura etichetta="Farenheit (F°)" valore={fromCelToFar(tempC)} onChange={val => setTempC(fromFarToCel(+val))} />
        </Box>
    );
}