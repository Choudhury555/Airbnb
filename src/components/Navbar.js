import React from "react"

export default function Navbar(){
    return(
        <nav>
            <img src={require("../images/airbnb-logo.png")} className="nav-logo"/>
            <h1>Airbnb Experiences</h1>
        </nav>
    )
}