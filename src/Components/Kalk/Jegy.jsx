function Jegy(props){
    
    return(
       <div>
          <p>{props.value}</p>
          <button onClick={props.function} value={props.value} index={props.index}>{props.sign}</button>
       </div> 
    );

}

export default Jegy;