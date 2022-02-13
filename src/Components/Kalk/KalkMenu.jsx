


function KalkMenu(props){
    
    return(
       <div className="kalkmenu">
           <button className="btn btn-primary btn-lg" name='Ponthatár' value='Ponthatár'onClick={props.function}>Ponthatár</button> 
           <button  className="btn btn-primary btn-lg" name='Átlag' value='Átlag'onClick={props.function}>Átlag</button> 
       </div> 
    );

}

export default KalkMenu;