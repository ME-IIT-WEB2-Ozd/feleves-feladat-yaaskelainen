import React, { useState, useEffect } from 'react';
import KalkMenu from "./KalkMenu";
import KalkFelulet from "./KalkFelulet";


function Kalk(){
    
    const [felulet, setFelulet] = useState('');

    const [isResponsive, setIsResponsive] = useState(window.innerWidth < 1200);


    useEffect(() => {
        window.addEventListener("resize", () => {
            const isres = window.innerWidth < 1200;
            if (isres !== isResponsive) setIsResponsive(isres);
             }, false);
        }, [isResponsive]);

    
    function atadNev (event){
        setFelulet(event.target.value);      
    }

    return(
       <div className='container kalk'>
           <div className='row kalkrow'>
                <div className={isResponsive? 'col':'col-3'}><KalkMenu function={atadNev}/></div>
                <div className={isResponsive? 'col ':'col-9'}><KalkFelulet name={felulet}/></div>   
             </div>         
       </div> 
    );

}

export default Kalk;
