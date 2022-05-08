import React, {useState} from 'react';
import SvgFlechaOdometro from './svgFlechaOdometro';
import SvgOdometro from './SvgOdometro';



const Odometro = ({valor}) => {
    return (
        <div style={{marginTop: "4rem"}}>
            <div className="odometro-container">
                <SvgOdometro />
                <div className="odometro-flecha" style={{transform: `rotate(${valor}deg)`}}>
                    <SvgFlechaOdometro />
                </div>
                <p className='odometro-texto'>{(valor*100/180).toFixed(2)}%</p>
            </div>
        </div>
  )
}

export default Odometro