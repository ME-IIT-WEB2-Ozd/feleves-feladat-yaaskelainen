


function Atlag(props){
    let sum;
    let show=false;
    if(props.numbers.length!==0){
    sum = props.numbers.reduce((accumulator, current) => accumulator + current);
    show=true;
    }
    let db = props.numbers.length;
    
    return(
        <div>
            {show && <p>Átlag:</p>}
            <div >{show && <div className='atlageredmeny'>{(sum/db).toFixed(1)}</div>}</div>
        </div>
    );
   

}

export default Atlag;