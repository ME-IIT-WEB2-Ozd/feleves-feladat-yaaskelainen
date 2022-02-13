import React, { useEffect, useState } from "react";






function GetNameDay () {
    
    const [Namedays, setNamedays] = useState({});                       // névnapok state
    const [loading, setLoading] = useState(true);                       // szinkronizáláshoz state

    useEffect(() => {                   
        const url = "https://api.nevnapok.eu/ma";
        

        const fetchData = async () => {                                 // GET 
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setNamedays(json);
            } catch (error) {
                console.log("error", error);
            } finally{ setLoading(false);}                              // engedi a kiíratást lefutást követően

            
        };
      
        fetchData();
    }, []);

    if (loading) {                                                      // amíg betölti a neveket 
        return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
      } else{
     return (
         <div className="container">
             <div className="row nevnapok">
             {Namedays[Object.keys(Namedays)[0]].map((nameday, index)=> <div className="col" key={index}>{nameday}</div>)}   
             </div>               
         </div>
     );                                                                                                             // kiíratás mappinggal
     }
}

export default GetNameDay; 