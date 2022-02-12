import Weather from "./Weather";
import Menu from "./Menu";
import "../../CSS/header.css";

import DailyInfo from "./DailyInfo";

function Header(){

    return(
       <div className="header container">
           <div className="row">
                <div className="col-md-4 weather"><Weather/></div>
                <div className="col-md-4"><Menu/></div>
                <div className="col-md-4"><DailyInfo/></div>
           </div>
       </div> 
    );

}

export default Header;