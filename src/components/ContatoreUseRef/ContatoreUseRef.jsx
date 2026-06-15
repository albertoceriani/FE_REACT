// import {useState} from 'react';
// // import styles from './ContatoreUseRef.module.css';
// import Box from '../Box/Box';

// export default function ContatoreUseRef() {
//     const [numero, setNumero] = useState(0);
//     console.log("Sto renderizzando..");
//     return(
//         <Box>
//             {console.log("Sto renderizzando da JSX..")}
//             <button onClick={()=>setNumero(numero + 1)}>+</button>
//             <button onClick={()=>{console.log(numero)}}>Stampa in console</button>
//         </Box>
//     );
// }

import {useRef} from 'react';
// import styles from './ContatoreUseRef.module.css';
import Box from '../Box/Box';

export default function ContatoreUseRef() {
    const contatore = useRef(0);
    // console.log("Sto renderizzando..");
    return(
        <Box>
            {/* {console.log("Sto renderizzando da JSX..")} */}
            <button onClick={()=>{contatore.current+=1}}>+</button>
            <button onClick={()=>{console.log(contatore.current)}}>Stampa in console</button>
        </Box>
    );
}