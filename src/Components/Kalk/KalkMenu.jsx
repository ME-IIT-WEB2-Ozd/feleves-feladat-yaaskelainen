


function KalkMenu(props){
    
    return(
       <div>
           <button name='Ponthatár' value='Ponthatár'onClick={props.function}>Ponthatár</button> 
           <button name='Átlag' value='Átlag'onClick={props.function}>Átlag</button> 
       </div> 
    );

}

export default KalkMenu;