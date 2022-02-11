import React, { useState } from 'react';
import KalkMenu from "./KalkMenu";
import KalkFelulet from "./KalkFelulet";


function Kalk(){
    
    const [felulet, setFelulet] = useState('');

    
    function atadNev (event){
        setFelulet(event.target.value);      
    }

    return(
       <div>
        <KalkMenu function={atadNev}/>   
        <KalkFelulet name={felulet}/>             
       </div> 
    );

}

export default Kalk;
