import React, {useState} from 'react';
import Caja from './Caja';
import Odometro from './odometro/Odometro';

const App = () => {
    const [valor, setValor] = useState(0);
    return (
        <>
            <Caja setValor={setValor}/>
            <Odometro valor={valor}/>
        </>
    )
}

export default App