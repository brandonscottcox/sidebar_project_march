import './App.css';
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";



function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
