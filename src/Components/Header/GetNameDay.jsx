import React, { useEffect, useState } from "react";






function GetNameDay () {
    
    const [Namedays, setNamedays] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://api.nevnapok.eu/ma";
        

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setNamedays(json);
            } catch (error) {
                console.log("error", error);
            } finally{ setLoading(false);}

            
        };
      
        fetchData();
    }, []);

    if (loading) {
        return <p>A névnapok töltődnek...</p>;
      } else{
     return (
         <div>
             {Namedays[Object.keys(Namedays)[0]].map((nameday, index)=> <div key={index}>{nameday}</div>)}
         </div>
     );
     }
}

export default GetNameDay; 