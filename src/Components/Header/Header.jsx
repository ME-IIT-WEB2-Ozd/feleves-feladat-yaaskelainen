import Weather from "./Weather";
import Menu from "./Menu";
import "../../CSS/additional.css";

import DailyInfo from "./DailyInfo";

function Header(){

    return(
       <div className="header container-fluid">
           <div className="row ">
                <div className="col-md-4 weather"><Weather/></div>
                <div className="col-md-4 menu"><Menu/></div>
                <div className="col-md-4 day"><DailyInfo/></div>
           </div>
       </div> 
    );

}

export default Header;