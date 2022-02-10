import React, { useState } from "react";
import ponthatar from './ponthatar';

function KalkPont(){
    
    const [pont,setPont]= useState();
    const [vanPont, setVan]= useState(false);

    function pontBeolvas(event){
        setPont(event.target.value);
        
        if(event.target.value.length===0){
            setVan(false);
        }else{
            setVan(true);
        }
    }

    return(
       <div>
           <input type="number" name="beirtPont" id="beirtPont" onChange={pontBeolvas}/>
           {vanPont && ponthatar.map((szazalek, index)=><p key={index}>       <span>{(pont*szazalek).toFixed(1)}</span> ponttól érdemjegy: {index+1}     </p>)}
       </div> 
    );

}

export default KalkPont;
