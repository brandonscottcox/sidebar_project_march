import React from "react";
import "../App.css";
import HeaderLogo from "../Images/HeaderLogo.png"

export default function Header() {
return (
    <header className="Header">
        <img src={HeaderLogo} alt="Brandon Cox"/>
    </header>
)
}