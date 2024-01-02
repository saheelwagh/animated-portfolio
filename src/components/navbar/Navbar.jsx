import React from "react";
import "./navbar.scss";

const Navbar = () =>{
    return(
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Lama Dev</span>
                <div className="social">
                    <a href="">
                        <img src="./facebook.png" alt="" /></a>  
                </div>
            </div>
        </div>
    )
}