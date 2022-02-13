import helppages from './helppages';
import Button from './Button';

function CreateButton(helppage){                                                                     // Gomb létrehozása, adatok átadása az objektumból 
    return <Button key={helppage.id} name={helppage.name} url={helppage.url} />;
}

function Menu(){
    
    return(
        <nav class="navbar navbar-expand-xl navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {helppages.map(CreateButton)}
                    </div> 
                </div>
            </div> 
        </nav>
    );

}

export default Menu;