import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar flex bg-amber-100 items-center">
            <div className="logo w-30 text-center"><Link to='/'>MyApp</Link></div>
            <div className="flex flex-1 bg-red-50 justify-center gap-5 ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </div>
    )
}