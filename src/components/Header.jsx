import React from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    return <div className="navbar_sec"> 
    <div className="left_solution">
    </div>
        <ul className="right_se">
            <li>
               <Link to="/home"> home</Link>
            </li>
            <li>
               <Link to="/login"> login</Link>
            </li>
            <li>
               <Link to="/form"> form</Link>
            </li>
            <li>
                <Link to="/product">product</Link>
            </li>
        </ul>
         </div>;
};
export default Header
