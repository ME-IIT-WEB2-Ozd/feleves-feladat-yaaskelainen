import React, { useState } from 'react';
import Jegy from "./Jegy";
import Atlag from './Atlag';

function KalkAtlag(){

    const jegyek =[1,2,3,4,5];
    const [osztalyzatok, setOsztalyzatok] = useState([]);
    const [vanOszt, setVanOszt] = useState(false);
    
    function addJegy(event){
        setOsztalyzatok(oldArray => [...oldArray, parseInt(event.target.value)]);
        setVanOszt(true);
    }

    function removeJegy(event){
        let index = parseInt(event.target.getAttribute("index"));
        
        setOsztalyzatok(osztalyzatok.filter((value,ind) => ind !== index));
        if(osztalyzatok.length===0){
        setVanOszt(false);
        }
    }

    return(
        <div>
            <div>
                {jegyek.map((jegy,index)=><Jegy key={index} value={jegy} function={addJegy} sign='+'/>)}
            </div> 
            <div>
                {osztalyzatok.map((jegy,index)=><Jegy key={index} index={index} value={jegy} function={removeJegy} sign='-'/>)}
            </div>
            <div>{vanOszt && <Atlag numbers={osztalyzatok}/>}</div>
       </div>
    );

}

export default KalkAtlag;