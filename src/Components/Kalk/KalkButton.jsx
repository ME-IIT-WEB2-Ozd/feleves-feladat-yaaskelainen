import KalkPont from "./KalkPont";


function OpenKalk(event){
        console.log(event.target.name)
    if(event.target.name==='Ponthatár'){
        return(
             <KalkPont/>
        );
    } else if(event.target.name==='Átlag'){
        return(
            <div>Átlag</div>
       );
    }

}

function KalkButton(props){                                                                     // Gomb létrehozása, adatok átadása az objektumból 
    return(
     <button name={props.name} onClick={OpenKalk}>{props.name}</button> 
    
     );

}

export default KalkButton;