import React from "react";
import {NavLink,Outlet } from "react-router-dom";
import '../Liststyle.css'
const List=()=>
{
    return(       
    <>
             <header >
            <div className="container container-flex">
                <nav>
                    <div className="List">
                        <NavLink to="/" className="ListItem" activeclassname="active">Home</NavLink>
                        <NavLink to="/about" className="ListItem" activeclassname="active">Internet</NavLink>
                        
                    </div>
                </nav>
            </div>
        </header>
        <Outlet/>
        </>
    );
}
export default List;