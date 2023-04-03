import React , {useState} from 'react';
import ConvertSelect from "./UI/Select/ConvertSelect";

const ConverterPrice = ({price}) => {
    const [convertPrice,setConvertPrice]=useState(price)
    const [convert,setConvert]=useState('')
    const tryConvert=(converting)=>{
        setConvert(converting)
        if(converting === "грн") {
            setConvertPrice(price)
        }
        else {
            setConvertPrice(converting*convertPrice)
        }
    }

    return (
        <div>
            {convertPrice}
            <ConvertSelect value={convert} options={[{name:'грн'},{value: 0.027,name:'$'}]} onChange={tryConvert} />
        </div>
    );
};

export default ConverterPrice;