import helppages from './helppages';
import Button from './Button';

function CreateButton(helppage){                                                                     // Gomb létrehozása, adatok átadása az objektumból 
    return <Button key={helppage.id} name={helppage.name} url={helppage.url} />;
}

function Menu(){
    
    return(
        <nav className="navbar navbar-expand-xl navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {helppages.map(CreateButton)}
                    </div> 
                </div>
            </div> 
        </nav>
    );

}

export default Menu;