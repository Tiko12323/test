import React from "react";

function NavBarBtn({onClick, title}){
    return(
        <div className="btn" onClick={onClick} >
            {title}
        </div>
    )
}

export default NavBarBtn