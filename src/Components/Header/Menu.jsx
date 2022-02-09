import helppages from './helppages';
import Button from './Button';

function CreateButton(helppage){                                                                     // Gomb létrehozása, adatok átadása az objektumból 
    return <Button key={helppage.id} name={helppage.name} url={helppage.url} />;
}

function Menu(){
    
    return(
       <div>
           {helppages.map(CreateButton)}
       </div> 
    );

}

export default Menu;