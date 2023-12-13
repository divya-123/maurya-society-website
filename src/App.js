import logo from './logo.jpg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notices from './pages/Notices';
import Information from './pages/Information';
import Amenities from './pages/Amenities';
import Forms from './pages/Forms';
import About from './pages/About';
import {Route, Switch} from "react-router-dom";
function App() {
  // let component;
  // switch(window.location.pathname){
  //   case "/":
  //     component=<Home />
  //     break;
  //   case "/about":
  //     component=<About />
  //     break;
  //   case "/notices":
  //     component=<Notices />
  //     break;
  //   case "/information":
  //     component=<Information />
  //     break;
  //   case "/amenities":
  //     component=<Amenities />
  //     break;
  //   case "/forms":
  //     component=<Forms />
  //     break;
  // }
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='navlinks'>
          <div>About</div>
          <div>Amenities</div>
          <div>Notices</div>
          <div>Information</div>
          <div>Forms</div>
          <div>Gallery</div>
        </div>
      </nav>
      <div className='welcome-page'>
        <div className='welcome-page-content'>
        <h1>Welcome to Maurya Society</h1>
        {/* <button>Get Started.</button> */}
        </div>
      </div>
    </>
  );
}

export default App;
