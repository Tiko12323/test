import React from "react";
import { useGetCategoryesByNameQuery } from "../../services/categoryesApi";
import './style.css'
import NavBarBtn from "../CustomButton/NavBarBtn/NavBarBtn";

function NavBar(){
    const {data} = useGetCategoryesByNameQuery()
    
    return(
        <div className="box">
            {
                data?.map((item)=>(
                    <NavBarBtn
                     key={item.id}
                     title={item.title}
                     onClick={()=>console.log(item.id)}/>
                    
                ))
            }

            
        </div>
    )
}

export default NavBar