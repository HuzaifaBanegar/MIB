// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home} from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Testimony } from './Pages/Testimony';
import ResponsiveAppBar from './Components/Navbar/Navbar'
import { Service } from './Pages/Service';
import { HowWeWork } from './Pages/Howwework';
import { AestheticDiv } from './Pages/AestheticDiv';
import { Contact } from './Pages/Contact';
import { Footer } from './Pages/Footer';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Home/>
      <Service/>
      <HowWeWork/>
      <Testimony/>
      {/* <AestheticDiv/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;


