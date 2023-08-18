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
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Home/>
      <Service/>
      <HowWeWork/>
      <Testimony/>
      <AestheticDiv/>
    </div>
  );
}

export default App;


