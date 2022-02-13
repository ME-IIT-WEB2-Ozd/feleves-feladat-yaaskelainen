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
           <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Maxpont</span>
                <input type="number" className="form-control" name="beirtPont" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="beirtPont" onChange={pontBeolvas}/>
           </div>
           
           {vanPont && ponthatar.map((szazalek, index)=><p className="pontok" key={index}>       <span>{(pont*szazalek).toFixed(1)}</span> ponttól érdemjegy: <span className="jegy">{index+1}</span>     </p>)}
       </div> 
    );

}

export default KalkPont;
