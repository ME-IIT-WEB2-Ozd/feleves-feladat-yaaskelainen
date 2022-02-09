

function openNewTab(event){                                                     // URL megnyitása új lapon 
    let urlForOpen = event.target.getAttribute('url');
    window.open(urlForOpen, '_blank');
}




function Button(props){                                                                                             
    return(
       <button value={props.name} url={props.url} onClick={openNewTab}>{props.name}</button>
    );
}

export default Button;