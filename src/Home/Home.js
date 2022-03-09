import React from "react";
import "../App.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


export default function Home() {
    return(
        <div className="App">
        <Header />
        <Sidebar />
        <body className="HomeBody">Home</body>
        </div>
    )
}