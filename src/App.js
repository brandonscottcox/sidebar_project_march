import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Name from "./Spring/WelcomePage/Name"


function App() {
  return (
    <div className="WelcomeBackground">
    <Header />
    <div>
    <body>
      <Name />
      {/* <p className="WelcomeName">Brandon Cox</p> */}
      <p className="WelcomeTitle">Front End Developer</p>
    {/* <nav className="WelcomeNav">
      <Link to="/home" className="WelcomeNav" style={{ textDecoration: 'none' }}>| Enter |</Link>
    </nav> */}
    </body>
    </div>
    </div>
  );
}

export default App;
