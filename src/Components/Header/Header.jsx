import Weather from "./Weather";
import Menu from "./Menu";

import DailyInfo from "./DailyInfo";

function Header(){

    return(
       <div>
           <Weather/>
           <Menu/>
           <DailyInfo/>
       </div> 
    );

}

export default Header;