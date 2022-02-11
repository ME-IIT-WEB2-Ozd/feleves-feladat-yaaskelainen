import KalkPont from "./KalkPont";
import KalkAtlag from "./KalkAtlag";

function KalkFelulet(props){
    
    if(props.name==='Ponthatár'){
        return(
             <div><KalkPont/></div>
        );
    } else if(props.name==='Átlag'){
        return(
            <div><KalkAtlag/></div>
       );
    } else{
        return <div></div>;

    }
    
}

export default KalkFelulet;