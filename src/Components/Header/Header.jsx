import Weather from "./Weather";
import Menu from "./Menu";
import DateTime from "./DateTime";

function Header(){

    return(
       <div>
           <Weather/>
           <Menu/>
           <DateTime/>
       </div> 
    );

}

export default Header;