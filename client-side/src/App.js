// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home} from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Testimony } from './Pages/Testimony';
import ResponsiveAppBar from './Components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
     <Home/>
     <Testimony/>
    </div>
  );
}

export default App;


