import React, { useEffect, useState } from 'react';
import './styles.scss';

const colors = {
    0: "verde",
    1: "amarillo",
    2: "rojo"
}

const Caja = ({setValor}) => {
    
    const [colorNumber, setColorNumber] = useState(0);
    const [tempValue, setTempValue] = useState("")
    
    useEffect(() => {
      const intervalColor = setInterval(() => {
        changeColorHead();
      }, 2000)
      return () => clearInterval(intervalColor)
    }, [colorNumber])

    function changeColorHead(){
        switch(colorNumber){
            case 0:
                setColorNumber(1);
                break;
            case 1:
                setColorNumber(2);
                break;
            case 2:
                setColorNumber(0);
                break;
            default:
                break;
        }
    }

    function onChangeValue(event){
        setTempValue(event.target.value);
    }

    function handleKeyPress (event) {
        if(event.key === 'Enter'){
            if(Number.isNaN(Number(tempValue))) return;
            const numValue = Number(tempValue)
            if(numValue < 0 || numValue > 100) return;
            setValor(convertToRadiant(tempValue));
        }
    }

    function convertToRadiant(number){
        return (number*180/100)
    }
    
    return (
        <div className='caja'>
            <div className={`caja-head ${colors[colorNumber]}`}></div>
            <div className="caja-body">
                <input type="text" placeholder='Message to Update'
                    onChange={onChangeValue}
                    onKeyPress={ handleKeyPress}
                />
            </div>
        </div>
  )
}

export default Caja